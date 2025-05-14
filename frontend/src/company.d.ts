// src/types/company.d.ts

/** Base company identifier used across all interfaces */
interface CompanyBase {
  symbol: string;
  name: string;
  currency: string;
  exchangeShortName: string;
}

/** Search result representation */
export interface CompanySearch extends CompanyBase {
  stockExchange: string;
}

/** Detailed company profile */
export interface CompanyProfile extends CompanyBase {
  price: number;
  beta: number;
  volAvg: number;
  mktCap: number;
  lastDiv: number;
  range: string;
  changes: number;
  companyName: string;
  cik: string;
  isin: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  ceo: string;
  sector: string;
  country: string;
  fullTimeEmployees: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dcfDiff: number;
  dcf: number;
  image: string;
  ipoDate: string;
  defaultImage: boolean;
  isEtf: boolean;
  isActivelyTrading: boolean;
  isAdr: boolean;
  isFund: boolean;
}

/** Financial metric period */
type FinancialPeriod = "TTM" | "Q" | "Y";

/** Financial ratio values */
interface RatioValues {
  value: number;
  period: FinancialPeriod;
}

/** Key financial ratios */
export interface CompanyKeyRatios {
  // Profitability Ratios
  grossProfitMargin: RatioValues;
  operatingProfitMargin: RatioValues;
  netProfitMargin: RatioValues;

  // Liquidity Ratios
  currentRatio: RatioValues;
  quickRatio: RatioValues;
  cashRatio: RatioValues;

  // Leverage Ratios
  debtEquityRatio: RatioValues;
  interestCoverage: RatioValues;

  // Valuation Ratios
  peRatio: RatioValues;
  priceToBookRatio: RatioValues;
  priceToSalesRatio: RatioValues;
  dividendYield: RatioValues;

  // Efficiency Ratios
  receivablesTurnover: RatioValues;
  inventoryTurnover: RatioValues;
  assetTurnover: RatioValues;
}

/** Financial statement base */
interface FinancialStatementBase {
  date: string;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: string;
  acceptedDate: string;
  calendarYear: string;
  period: string;
  link: string;
  finalLink: string;
}

/** Income statement */
export interface CompanyIncomeStatement extends FinancialStatementBase {
  revenue: number;
  costOfRevenue: number;
  grossProfit: number;
  operatingExpenses: number;
  operatingIncome: number;
  netIncome: number;
  eps: number;
  epsdiluted: number;
}

/** Balance sheet */
export interface CompanyBalanceSheet extends FinancialStatementBase {
  totalAssets: number;
  totalCurrentAssets: number;
  totalNonCurrentAssets: number;
  totalLiabilities: number;
  totalEquity: number;
  totalDebt: number;
  netDebt: number;
}

/** Cash flow statement */
export interface CompanyCashFlow extends FinancialStatementBase {
  netCashProvidedByOperatingActivities: number;
  netCashUsedForInvestingActivites: number;
  netCashUsedProvidedByFinancingActivities: number;
  freeCashFlow: number;
  operatingCashFlow: number;
}

/** API response wrapper */
export interface ApiResponse<T> {
  data: T;
  error?: string;
  metadata?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

// Type guards for runtime validation
export function isCompanyProfile(obj: any): obj is CompanyProfile {
  return obj && typeof obj.symbol === "string" && typeof obj.price === "number";
}

export function isCompanySearch(obj: any): obj is CompanySearch {
  return obj && typeof obj.symbol === "string" && typeof obj.name === "string";
}
