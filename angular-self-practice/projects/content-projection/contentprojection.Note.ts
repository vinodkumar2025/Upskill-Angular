// Content projection allows you to project content from a parent component 
// into a child component's template at the location of <ng-content>.

// Key concepts:
// - <ng-content>: The basic mechanism for content projection.
// - select="...": Use the select attribute to filter content based on tag, class, or attribute.
// - ngProjectAs: Assign a custom selector to an element for projection.
// - @ContentChild and @ContentChildren: Access projected content from the parent component.
// - ng-template and ngTemplateOutlet: For dynamically rendering content with context.
// - Multiple <ng-content>: Project content to different areas of the child component.
// - Default Slot: Content that does not match any specific <ng-content select="..."> will go into the default slot.
// - @ContentChildren and @ContentChild are used in the child component to query projected content and manipulate it programmatically.
// - ngAfterContentInit is the right lifecycle hook for accessing and interacting with projected content since it runs after content has been initialized and projected into the child component.


// 1. Any content placed inside a custom component tag will not be displayed 
//    unless the custom component explicitly defines where to render it using <ng-content>.

/**
 * Example:
 * 
 * card.component.html:
 * ---------------------
 * <p>Card works!</p>
 * <ng-content></ng-content>
 * 
 * app.component.html:
 * ---------------------
 * <app-card>
 *   <h1>Content inside the card</h1>
 * </app-card>
 * 
 * Output:
 * -------
 * Card works!
 * Content inside the card
 */

/*-------------------------------------------------------------------------------------------------------------*/

// 2. By using the `select` attribute with <ng-content>, we can project content into specific positions.
//    The `select` value can match HTML tag names, CSS classes, or attributes.

/**
 * Example:
 * 
 * card.component.html:
 * ---------------------
 * <div class="card">
 *   <ng-content select="h1"></ng-content>            <!-- Matches h1 tag -->
 *   <ng-content select=".description"></ng-content> <!-- Matches any element with class 'description' -->
 *   <ng-content></ng-content>                       <!-- Default slot for unmatched content -->
 * </div>
 * 
 * app.component.html:
 * ---------------------
 * <app-card>
 *   <h1>Title goes here</h1>
 *   <p class="description">This is the description.</p>
 *   <button>Click me</button>
 * </app-card>
 * 
 * Output:
 * -------
 * <div class="card">
 *   <h1>Title goes here</h1>
 *   <p class="description">This is the description.</p>
 *   <button>Click me</button>
 * </div>
 */

/*-------------------------------------------------------------------------------------------------------------*/

// 3. If multiple <ng-content> elements could match the same projected content,
//    Angular will insert that content into the first <ng-content> with a matching selector.
//    The same element will not be projected into multiple slots.

/**
 * Example:
 * 
 * card.component.html:
 * ---------------------
 * <ng-content select="p"></ng-content>         <!-- First match -->
 * <ng-content select=".info"></ng-content>     <!-- Second match (won't get this if already matched above) -->
 * 
 * app.component.html:
 * ---------------------
 * <app-card>
 *   <p class="info">This paragraph has class 'info' and tag 'p'</p>
 * </app-card>
 * 
 * Output:
 * -------
 * <p class="info">This paragraph has class 'info' and tag 'p'</p>
 * 
 * The element matches both selectors, but is projected only into the first one that matches (select="p").
 */

/*-------------------------------------------------------------------------------------------------------------*/

// 4.ngProjectAs is used to **assign a custom selector** to an element for content projection.
// It does not change the element itself, but **adds a selector to the tag in the DOM**, which allows the content to be projected
// into the corresponding <ng-content select="..."> slot based on that selector.

/**
 * Example:
 * 
 * card.component.html:
 * ---------------------
 * <div class="card">
 *   <ng-content select="header"></ng-content>         <!-- Projects content with 'header' tag -->
 *   <ng-content select="[card-footer]"></ng-content> <!-- Projects content with 'card-footer' attribute -->
 *   <ng-content></ng-content>                        <!-- Default slot for unmatched content -->
 * </div>
 * 
 * app.component.html:
 * ---------------------
 * <app-card>
 *   <div ngProjectAs="header">Projected as header</div>
 *   <p>This goes to default slot</p>
 *   <div ngProjectAs="[card-footer]">Projected as footer</div>
 * </app-card>
 * 
 * Output:
 * -------
 * <div class="card">
 *   <div>Projected as header</div>
 *   <div>Projected as footer</div>
 *   <p>This goes to default slot</p>
 * </div>
 */


/*-------------------------------------------------------------------------------------------------------------*/

// 5.ngTemplateOutlet is used to render an <ng-template> dynamically in Angular.
// It allows us to choose which template to render at runtime, based on a condition or logic.

/**
 * Syntax:
 * -------
 * <ng-container *ngTemplateOutlet="templateRef"></ng-container>
 * 
 * We can also pass context data:
 * <ng-container *ngTemplateOutlet="templateRef; context: someContext"></ng-container>
 * 
 * Example (conditional rendering):
 * --------------------------------
 * 
 * app.component.html:
 * -------------------
 * <div>
 *   <ng-container *ngTemplateOutlet="isTrue ? trueTemplate : falseTemplate"></ng-container>
 * </div>
 * 
 * <ng-template #trueTemplate>
 *   <h1>Display when value is true</h1>
 * </ng-template>
 * 
 * <ng-template #falseTemplate>
 *   <h1>Display when value is false</h1>
 * </ng-template>
 * 
 * app.component.ts:
 * -----------------
 * export class AppComponent {
 *   isTrue = true; // Toggle this value to switch templates
 * }
 * 
 * Output (when isTrue = true):
 * ----------------------------
 * <div>
 *   <h1>Display when value is true</h1>
 * </div>
 */

/*-------------------------------------------------------------------------------------------------------------*/

// Notes: Rendering Projected Content in a Loop in Angular
//
// 1️⃣ <ng-content> is used for **content projection**, which allows a component to receive content from its parent and render it in a specific place.
//     Example:
//     <ng-content select="card-header"></ng-content>
//
// 2️⃣ However, <ng-content> is a **compile-time mechanism** — Angular moves the projected DOM nodes only **once** into the component.
//     ➤ This means placing <ng-content> inside a loop (like *ngFor or @for) will NOT repeat the content multiple times.
//
//     ❌ Example that doesn't work as expected:
//     @for (item of items) {
//         <ng-content select="card-header"></ng-content>
//     }
//
//     🔴 The content will be projected only once, regardless of the number of iterations.
//
// 3️⃣ ✅ Correct Way #1: Use a <ng-template> and pass it as an Input to render dynamic or repeated content.
//
// --- Example: Looping content using ngTemplateOutlet ---
//
// app.component.html:
// --------------------
// <app-card [items]="items" [header]="headerTpl"></app-card>
//
// <ng-template #headerTpl let-item let-i="index">
//   <h3>{{ i + 1 }}. {{ item.title }}</h3>
// </ng-template>
//
// app.component.ts:
// ------------------
// export class AppComponent {
//   items = [{ title: 'One' }, { title: 'Two' }, { title: 'Three' }];
// }
//
// card.component.ts:
// -------------------
// @Input() items: any[] = [];
// @Input() header!: TemplateRef<any>;
//
// card.component.html:
// ---------------------
// <div class="card">
//   <ng-container *ngFor="let item of items; index as i">
//     <ng-container *ngTemplateOutlet="header; context: { $implicit: item, index: i }"></ng-container>
//   </ng-container>
// </div>
//
// 4️⃣ ✅ Correct Way #2: Use @ContentChild or @ContentChildren to access a template reference from projected content.
//
// --- Example: Accessing projected template using @ContentChild ---
//
// app.component.html:
// --------------------
// <app-card [items]="items">
//   <ng-template #header let-item let-i="index">
//     <h3>{{ i + 1 }}: {{ item.title }}</h3>
//   </ng-template>
// </app-card>
//
// card.component.ts:
// -------------------
// @Input() items: any[] = [];
// @ContentChild('header', { static: true }) headerTpl!: TemplateRef<any>;
//
// card.component.html:
// ---------------------
// <div class="card">
//   <ng-container *ngFor="let item of items; index as i">
//     <ng-container *ngTemplateOutlet="headerTpl; context: { $implicit: item, index: i }"></ng-container>
//   </ng-container>
// </div>
//
// ✅ This approach allows you to keep the template inside the projected content area but still render it in a loop.
//
// Summary:
// --------
// - 🔸 Use <ng-content> for static, one-time projection.
// - 🔸 Use @Input + ngTemplateOutlet to render templates in loops.
// - 🔸 Alternatively, use @ContentChild or @ContentChildren to access and render <ng-template> passed via content projection.
// - 🔸 ngProjectAs does NOT work with <ng-template> because it's not a real DOM element.

/*-------------------------------------------------------------------------------------------------------------*/