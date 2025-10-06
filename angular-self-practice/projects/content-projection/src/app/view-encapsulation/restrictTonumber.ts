import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[restrictNumber]',
    standalone: true
})
export class RestrictNumberDirective{
  private regex: RegExp = /^[0-9]*$/;
  private specialKeys: string[] = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (
      this.specialKeys.includes(event.key) ||
      (event.ctrlKey && ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase()))
    ) {
      // Allow navigation and control keys
      return;
    }

    // Disallow non-numeric characters
    const key = event.key;
    if (!this.regex.test(key)) {
      event.preventDefault();
    }
  }
}