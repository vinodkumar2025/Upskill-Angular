import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

// This directive conditionally removes or renders an element in the DOM
@Directive({
    selector: '[RemoveDom]', // Selector to be used as an attribute, e.g., *RemoveDom
    standalone: true // This makes the directive usable without declaring it in an NgModule
})
export class RemoveDomDirective {

    // Constructor injects dependencies:
    // - TemplateRef: the HTML element and its content the directive is attached to
    // - ViewContainerRef: the container to insert/remove the template from the DOM
    constructor(private templateref: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

    // Input property bound to the directive usage in HTML
    @Input() set RemoveDom(condition: boolean) {
        if (!condition) {
            // If condition is false, render the element into the DOM
            this.viewContainerRef.createEmbeddedView(this.templateref);
        } else {
            // If condition is true, remove the element from the DOM
            this.viewContainerRef.clear();
        }
    }
}
