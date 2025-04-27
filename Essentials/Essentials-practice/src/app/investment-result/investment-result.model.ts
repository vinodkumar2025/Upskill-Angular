export interface InvestmentResult {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}

export interface UserInputData{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}