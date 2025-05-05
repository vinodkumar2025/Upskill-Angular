import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHoverHighlight]',
    standalone: true
})
export class HoverHighlightDirective {
    private highlightColor: string = 'yellow'; // default fallback

    @Input() set appHoverHighlight(color: string | undefined) {
        this.highlightColor = color || 'yellow'; // use default if undefined or null
    }

    constructor(private el: ElementRef) { }

    // When mouse enters the element
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor);
    }

    // When mouse leaves the element
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
