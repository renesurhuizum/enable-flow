#!/usr/bin/env python3
"""
Email Validator Script
Validates email addresses for deliverability

Usage:
  python email_validator.py --email "test@example.com"
  python email_validator.py --file "emails.txt"
"""

import re
import dns.resolver
import smtplib
import argparse
import sys
from typing import Dict, List

def validate_email_format(email: str) -> bool:
    """Validate email format using regex"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def check_mx_record(domain: str) -> bool:
    """Check if domain has valid MX records"""
    try:
        dns.resolver.resolve(domain, 'MX')
        return True
    except (dns.resolver.NXDOMAIN, dns.resolver.NoAnswer, dns.resolver.NoNameservers):
        return False
    except Exception:
        return False

def validate_email(email: str, check_smtp: bool = False) -> Dict:
    """
    Validate email address

    Args:
        email: Email address to validate
        check_smtp: Whether to check SMTP connectivity (can be slow)

    Returns:
        Dict with validation results
    """
    result = {
        "email": email,
        "valid": False,
        "checks": {
            "format": False,
            "mx_record": False,
            "smtp": None
        },
        "reason": ""
    }

    # Check format
    if not validate_email_format(email):
        result["reason"] = "Invalid email format"
        return result

    result["checks"]["format"] = True

    # Extract domain
    try:
        domain = email.split('@')[1]
    except IndexError:
        result["reason"] = "Cannot extract domain"
        return result

    # Check MX record
    if not check_mx_record(domain):
        result["reason"] = "No MX record found for domain"
        return result

    result["checks"]["mx_record"] = True

    # Optional SMTP check
    if check_smtp:
        try:
            # Get MX record
            mx_records = dns.resolver.resolve(domain, 'MX')
            mx_host = str(mx_records[0].exchange)

            # Connect to SMTP server
            with smtplib.SMTP(timeout=10) as server:
                server.connect(mx_host)
                server.helo()
                server.mail('test@example.com')
                code, message = server.rcpt(email)

                result["checks"]["smtp"] = code == 250
        except Exception as e:
            result["checks"]["smtp"] = False
            result["reason"] = f"SMTP check failed: {str(e)}"

    # Determine overall validity
    result["valid"] = result["checks"]["format"] and result["checks"]["mx_record"]

    if result["valid"]:
        result["reason"] = "Valid email address"

    return result

def validate_email_list(emails: List[str], check_smtp: bool = False) -> List[Dict]:
    """Validate a list of emails"""
    results = []

    for email in emails:
        email = email.strip()
        if email:
            result = validate_email(email, check_smtp)
            results.append(result)

    return results

def main():
    parser = argparse.ArgumentParser(description="Validate email addresses")
    parser.add_argument("--email", help="Single email to validate")
    parser.add_argument("--file", help="File with email addresses (one per line)")
    parser.add_argument("--smtp", action="store_true", help="Check SMTP connectivity (slow)")
    parser.add_argument("--json", action="store_true", help="Output as JSON")

    args = parser.parse_args()

    if not args.email and not args.file:
        parser.error("Provide either --email or --file")

    # Collect emails
    emails = []
    if args.email:
        emails = [args.email]
    elif args.file:
        try:
            with open(args.file, 'r') as f:
                emails = [line.strip() for line in f if line.strip()]
        except FileNotFoundError:
            print(f"Error: File '{args.file}' not found")
            sys.exit(1)

    # Validate
    results = validate_email_list(emails, args.smtp)

    # Output
    if args.json:
        import json
        print(json.dumps(results, indent=2))
    else:
        print(f"\n📧 Email Validation Results\n")
        print("=" * 60)

        valid_count = sum(1 for r in results if r["valid"])
        invalid_count = len(results) - valid_count

        for result in results:
            status = "✅" if result["valid"] else "❌"
            print(f"\n{status} {result['email']}")
            print(f"   Format: {'✓' if result['checks']['format'] else '✗'}")
            print(f"   MX Record: {'✓' if result['checks']['mx_record'] else '✗'}")
            if result['checks']['smtp'] is not None:
                print(f"   SMTP: {'✓' if result['checks']['smtp'] else '✗'}")
            print(f"   Reason: {result['reason']}")

        print("\n" + "=" * 60)
        print(f"Total: {len(results)} | Valid: {valid_count} | Invalid: {invalid_count}")
        print(f"Success Rate: {round(valid_count / len(results) * 100) if results else 0}%\n")

if __name__ == "__main__":
    main()
