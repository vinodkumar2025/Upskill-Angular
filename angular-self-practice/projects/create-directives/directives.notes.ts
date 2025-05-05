// Angular Directives: Brief Notes

// Directives are classes that add behavior or modify DOM elements/components in Angular.

// 1. Types of Directives
// - Component Directives: Components with templates (e.g., @Component).
// - Structural Directives: Modify DOM structure (e.g., *ngIf, *ngFor).
// - Attribute Directives: Change appearance/behavior of elements (e.g., ngClass, ngStyle).

// 2. Component Directives
// - Full-fledged components with templates, styles, and logic.
// - Use: Reusable UI building blocks.
// 🔸 Example: <app-my-component></app-my-component>

// 3. Structural Directives
// - Alter DOM by adding/removing elements.
// - Marked with * (syntactic sugar for ng-template).
// - Common: *ngIf (conditional display), *ngFor (list iteration), *ngSwitch.
// 🔸 Example: <div *ngIf="condition">Content</div>

// 4. Attribute Directives
// - Modify behavior or appearance of an element, component, or directive.
// - Applied as attributes on elements.
// - Common: ngClass, ngStyle; custom directives possible.
// 🔸 Example: <div [ngClass]="{'active': isActive}">Styled</div>

// 5. Creating Custom Directives
// - Use @Directive decorator with a selector.
// - Access host element via ElementRef or HostListener/HostBinding.
// 🔸 Example:
//   @Directive({ selector: '[appHighlight]' })
//   export class HighlightDirective {
//     constructor(el: ElementRef) {
//       el.nativeElement.style.backgroundColor = 'yellow';
//     }
//   }
//   Usage: <p appHighlight>Highlighted text</p>

// Key Points
// - Directives enhance DOM without requiring full components.
// - Structural: Change DOM layout; Attribute: Change element properties.
// - Lifecycle hooks (e.g., ngOnInit, ngOnChanges) available in directives.
// - Use Renderer2 for safe DOM manipulation in custom directives.
// - Avoid direct DOM access (ElementRef) for server-side rendering compatibility.