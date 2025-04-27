import { Injectable, signal } from '@angular/core';
import { InvestmentResult, UserInputData } from './investment-result.model';


@Injectable({
  providedIn: 'root'
})
export class InvestmentResultService {
  resultData = signal<InvestmentResult[]| undefined>(undefined);

  calculateInvestmentResult(UserInputData:UserInputData){
    const annualData: InvestmentResult[] = [];
    let investmentValue = UserInputData.initialInvestment;
  
    for (let i = 0; i < UserInputData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (UserInputData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + UserInputData.annualInvestment;
      const totalInterest =
        investmentValue - UserInputData.annualInvestment * year - UserInputData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: UserInputData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: UserInputData.initialInvestment + UserInputData.annualInvestment * year,
      });
    }
    this.resultData.set(annualData);
  }
}
