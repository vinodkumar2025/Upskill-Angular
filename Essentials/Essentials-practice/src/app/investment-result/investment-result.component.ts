import { Component, computed, signal } from '@angular/core';
import { InvestmentResultService } from './investment-result.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  constructor(private investmentResultService: InvestmentResultService) { }
 
  results= computed(()=>this.investmentResultService.resultData());
}
