import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultService } from '../investment-result/investment-result.service';
import { UserInputData } from '../investment-result/investment-result.model';

@Component({
  selector: 'app-user-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css'
})
export class UserInputsComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 10;

  constructor(private investmentResult: InvestmentResultService){}

  onCalculateClick(){
    this.investmentResult.calculateInvestmentResult({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    }as UserInputData);
    this.initialInvestment = 0;
    this.annualInvestment = 0;
    this.expectedReturn = 5;
    this.duration = 10;
  }
}
