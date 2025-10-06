import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appViewEncapsulation]',
  standalone: true
})
export class ViewEncapsulationDirective {

  @Input() color:string = ''
  constructor(private el: ElementRef) { 
  }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = this.color;
  }
}
