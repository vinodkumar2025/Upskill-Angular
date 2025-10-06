import { AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-full-name',
  standalone: true,
  imports: [],
  templateUrl: './full-name.component.html',
  styleUrl: './full-name.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullNameComponent implements DoCheck, AfterContentChecked, AfterViewChecked {
 @Input() fName: string = '';
 ngDoCheck(): void {
   console.log('child do check')
 }
 ngAfterContentChecked(){
  console.log('ngAfterContentChecked')
 }

  ngAfterViewChecked(){
  console.log('AfterViewChecked')
 }
}
