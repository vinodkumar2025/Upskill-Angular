import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
//custom directive to show or hide the element based on the user type
  @Input('appAuth') userType: string = '';
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  ngOnInit(){
    if(this.userType === 'admin') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }
}
