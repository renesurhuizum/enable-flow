#!/usr/bin/env python3
"""
KvK Lookup Helper Script
Helper script to manually lookup companies in KvK database

Usage:
  python kvk_lookup_helper.py --name "Bedrijfsnaam" --city "Surhuisterveen"
"""

import requests
import json
import sys
import argparse
from typing import Dict, Optional

# KvK API Configuration
KVK_API_BASE = "https://api.kvk.nl/api/v1"
KVK_API_KEY = "YOUR_KVK_API_KEY"  # Update this

def lookup_company(name: str, city: Optional[str] = None) -> Dict:
    """
    Lookup company in KvK database

    Args:
        name: Company name
        city: City name (optional, improves search accuracy)

    Returns:
        Dict with company information
    """
    url = f"{KVK_API_BASE}/zoeken"

    headers = {
        "apikey": KVK_API_KEY
    }

    params = {
        "naam": name,
        "aantal": 5  # Get top 5 results
    }

    if city:
        params["plaats"] = city

    try:
        response = requests.get(url, headers=headers, params=params, timeout=10)
        response.raise_for_status()

        data = response.json()
        results = data.get("resultaten", [])

        if not results:
            return {
                "success": False,
                "message": "No companies found",
                "results": []
            }

        # Format results
        formatted_results = []
        for result in results:
            formatted_results.append({
                "kvk_nummer": result.get("kvkNummer", ""),
                "handelsnaam": result.get("handelsnaam", ""),
                "straat": result.get("straatnaam", ""),
                "huisnummer": result.get("huisnummer", ""),
                "postcode": result.get("postcode", ""),
                "plaats": result.get("plaats", ""),
                "sbi_code": result.get("hoofdSbiCode", ""),
                "branche": result.get("sbiOmschrijving", ""),
                "werkzame_personen": result.get("totaalWerkzamePersonen", 0),
                "actief": result.get("actief", False)
            })

        return {
            "success": True,
            "count": len(formatted_results),
            "results": formatted_results
        }

    except requests.exceptions.RequestException as e:
        return {
            "success": False,
            "message": f"API request failed: {str(e)}",
            "results": []
        }

def get_company_details(kvk_nummer: str) -> Dict:
    """
    Get detailed company information by KvK number

    Args:
        kvk_nummer: KvK registration number

    Returns:
        Dict with detailed company information
    """
    url = f"{KVK_API_BASE}/basisprofielen/{kvk_nummer}"

    headers = {
        "apikey": KVK_API_KEY
    }

    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        data = response.json()

        return {
            "success": True,
            "data": data
        }

    except requests.exceptions.RequestException as e:
        return {
            "success": False,
            "message": f"API request failed: {str(e)}"
        }

def main():
    parser = argparse.ArgumentParser(description="Lookup companies in KvK database")
    parser.add_argument("--name", required=True, help="Company name to search")
    parser.add_argument("--city", help="City name (optional)")
    parser.add_argument("--kvk", help="KvK number for detailed lookup")
    parser.add_argument("--json", action="store_true", help="Output as JSON")

    args = parser.parse_args()

    if args.kvk:
        # Detailed lookup by KvK number
        result = get_company_details(args.kvk)
    else:
        # Search by name
        result = lookup_company(args.name, args.city)

    if args.json:
        # Output as JSON
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        # Pretty print
        if result.get("success"):
            if "results" in result:
                print(f"\n✅ Found {result['count']} companies:\n")
                for i, company in enumerate(result["results"], 1):
                    print(f"{i}. {company['handelsnaam']}")
                    print(f"   KvK: {company['kvk_nummer']}")
                    print(f"   Address: {company['straat']} {company['huisnummer']}, {company['postcode']} {company['plaats']}")
                    print(f"   Branche: {company['branche']} (SBI: {company['sbi_code']})")
                    print(f"   Employees: {company['werkzame_personen']}")
                    print(f"   Active: {'Yes' if company['actief'] else 'No'}")
                    print()
            else:
                print(f"\n✅ Company Details:\n")
                print(json.dumps(result["data"], indent=2, ensure_ascii=False))
        else:
            print(f"\n❌ Error: {result.get('message')}")
            sys.exit(1)

if __name__ == "__main__":
    main()
