import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputsComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
