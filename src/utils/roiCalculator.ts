// Pure ROI calculation for the simple homepage calculator
// (More advanced scan-based ROI is in scanLogic.ts)

export interface SimpleRoiParams {
  employees: number;
  hourlyRate: number;
  /** Hours saved per employee per week — default 5 */
  weeklyHoursSaved?: number;
}

export interface SimpleRoiResult {
  monthly: number;
  yearly: number;
}

export function calcSimpleRoi(params: SimpleRoiParams): SimpleRoiResult {
  const { employees, hourlyRate, weeklyHoursSaved = 5 } = params;
  const monthly = employees * hourlyRate * weeklyHoursSaved * 4;
  return { monthly, yearly: monthly * 12 };
}
