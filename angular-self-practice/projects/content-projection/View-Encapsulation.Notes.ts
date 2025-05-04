// Angular ViewEncapsulation: Brief Notes

// ViewEncapsulation defines how component styles are scoped and applied in Angular.

// 1. ViewEncapsulation.Emulated (Default)
// - Scopes styles to component using unique attributes (e.g., _ngcontent-xxx).
// - Mimics Shadow DOM without native support.
// - Styles don't leak; global styles don't affect component.
// 🔸 Use: Most applications; balances isolation and compatibility.

// 2. ViewEncapsulation.ShadowDom
// - Uses native Shadow DOM for full style and DOM isolation.
// - Component styles are completely separate from global styles.
// - External scripts can't query Shadow DOM without access.
// 🔸 Use: Reusable widgets, strict isolation; requires browser support.

// 3. ViewEncapsulation.None
// - Disables encapsulation; styles are global and affect all matching elements.
// - Component is affected by global styles; risks conflicts.
// 🔸 Use: Rare; for shared styles or theming, manage specificity carefully.

// Key Points
// - Emulated: Default, safe, scoped with attributes.
// - ShadowDom: True isolation, modern browsers, complex integration.
// - None: Global styles, high risk of conflicts, use cautiously.
// - Styles applied during view init (ngAfterViewInit).
// - Use :host for component host styling; avoid ::ng-deep (deprecated).