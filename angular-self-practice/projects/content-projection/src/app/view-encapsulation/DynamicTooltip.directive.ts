import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDynamicTooltip]',
    standalone: true
})
export class DynamicTooltip {
    @Input()tooltip:string = '';
    constructor(private el:ElementRef, private render:Renderer2){}
    
    @HostListener('mouseenter')
    onMouseEnter(){
        this.render.setAttribute(this.el.nativeElement, 'title', this.tooltip)
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.render.removeAttribute(this.el.nativeElement, 'title')
    }
}