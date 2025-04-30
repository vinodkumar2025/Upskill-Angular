import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: 'a[appShafeLink]',
  standalone: true,
  host:{
    '(click)': 'onClick($event)'
  }
})
export class ShafeLinkDirective {
// @Input() queryParams: string = '';
// here the queryParams is passed from the parent component to the directive and the appshafLink is the alias name for the queryParams so that we can use it in the parent component direclty to the selector instead of adding queryParams in the parent component like [queryParams]='queryParams'
  @Input('appShafeLink') queryParams: string = 'test';

  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() { 
    console.log('ShafeLinkDirective initialized');
  } 

  onClick(event: MouseEvent) {
    const leave = window.confirm('Are you sure you want to leave this page?');
    if (leave) {
      const address= this.hostElement.nativeElement.href;
      this.hostElement.nativeElement.href=address+'?form='+this.queryParams;
      return 
    }
    event.preventDefault();
  }
}
