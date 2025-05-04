// Angular Component Lifecycle Hooks: Brief Notes

// Initialization Phase
// 1. AppComponent: constructor
// 2. ChildComponent: constructor
// 3. AppComponent: ngOnInit
// 4. AppComponent: ngDoCheck
// 5. AppComponent: ngAfterContentInit
// 6. AppComponent: ngAfterContentChecked
// 7. ChildComponent: ngOnChanges
// 8. ChildComponent: ngOnInit
// 9. ChildComponent: ngDoCheck
// 10. ChildComponent: ngAfterContentInit
// 11. ChildComponent: ngAfterContentChecked
// 12. ChildComponent: ngAfterViewInit
// 13. ChildComponent: ngAfterViewChecked
// 14. AppComponent: ngAfterViewInit
// 15. AppComponent: ngAfterViewChecked

// Change Detection Phase (Subsequent Cycle)
// 16. AppComponent: ngDoCheck
// 17. AppComponent: ngAfterContentChecked
// 18. ChildComponent: ngDoCheck
// 19. ChildComponent: ngAfterContentChecked
// 20. ChildComponent: ngAfterViewChecked
// 21. AppComponent: ngAfterViewChecked


// 1. constructor()
// - Called first when component is instantiated.
// - No bindings/DOM access yet. Used for basic setup (e.g., DI).
// 🔸 Order: Parent constructor → Child constructor

// 2. ngOnChanges(changes: SimpleChanges)
// - Called for components with @Input when values change.
// - Runs once on init if inputs set, then on changes.
// - Provides SimpleChanges with previous/current values.
// 🔸 Order: Child ngOnChanges (before Parent ngOnInit, only if @Input)

// 3. ngOnInit()
// - Called once after data-bound properties are initialized.
// - Ideal for setup (e.g., fetch data, subscriptions).
// 🔸 Order: Parent ngOnInit → Child ngOnInit

// 4. ngDoCheck()
// - Called every change detection cycle, including init.
// - For custom change detection. Use cautiously (performance).
// 🔸 Order: Parent ngDoCheck → Child ngDoCheck (runs multiple times)

// 5. ngAfterContentInit()
// - Called once after <ng-content> projection is set up.
// - Runs even without <ng-content>. Not for *ngTemplateOutlet.
// 🔸 Order: Parent ngAfterContentInit → Child ngAfterContentInit

// 6. ngAfterContentChecked()
// - Called after each check of projected content.
// - Runs even without <ng-content>. Not for *ngTemplateOutlet.
// 🔸 Order: Parent ngAfterContentChecked → Child ngAfterContentChecked

// 7. ngAfterViewInit()
// - Called once after component and child views are initialized.
// - *ngTemplateOutlet rendered. Good for DOM/child access.
// 🔸 Order: Child ngAfterViewInit → Parent ngAfterViewInit

// 8. ngAfterViewChecked()
// - Called after each check of component/child views.
// - Avoid heavy logic (runs frequently).
// 🔸 Order: Child ngAfterViewChecked → Parent ngAfterViewChecked

// 9. ngOnDestroy()
// - Called before component is removed from DOM.
// - For cleanup (e.g., unsubscribe Observables, clear timers).
// 🔸 Order: Child ngOnDestroy → Parent ngOnDestroy (if destroyed, e.g., *ngIf)