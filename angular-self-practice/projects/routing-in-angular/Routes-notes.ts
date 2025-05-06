//https://grok.com/chat/8bceb7f8-7ccc-4a68-b72d-4f744a8c1d8b

// to make routes available to application
// 1. Import RouterModule in your root or feature module to enable routing.
// 2. Define routes in a Routes array and register them with forRoot or forChild.
// 3. Use <router-outlet> in your template to render the component associated with the current route.

// pathMatch in route object: It provides two possible values:
// 1. 'full'   : Used to redirect to another route only when the entire URL matches the specified path exactly.
//               Commonly used with empty path ('') redirects.
// 2. 'prefix' : This is the default value. It matches when the beginning of the URL matches the route's path.
//               Useful for matching parent routes that have child or nested routes.

// Static route: path: 'home'
// - Matches only the exact path '/home'
// Dynamic route: path: 'list/:id'
// - Matches paths like '/list/1', '/list/abc'

// Multiple <router-outlet>s can be used with unique names to render secondary routes (e.g., sidebars or popups).
// Example:
// const routes: Routes = [
//     { path: 'sidebar', component: SidebarComponent, outlet: 'sidebar' }
//   ];
// <router-outlet name="sidebar"></router-outlet>

// Use Router.navigate or navigateByUrl in response to user actions (e.g., button clicks, form submissions).
// Access route information via ActivatedRoute to display dynamic content or make decisions.
// Monitor router.events for analytics, logging, or UI updates during navigation.
// example: 
// router.events.subscribe(event => {
//     if (event instanceof NavigationEnd) {
//       console.log('Navigation completed:', event.url);
//     }
//   });

// Use required parameters (:id) for essential data in the URL (e.g., resource IDs).
// Use query parameters for optional or filter data (e.g., search criteria, sorting).
// Combine paramMap and queryParamMap for complex routing scenarios.
// Use fragments to navigate to specific sections within a page (e.g., #team, #mission).
// Enable anchorScrolling in router config to make fragment scrolling work.
// Use [routerLink] or router.navigate() with the fragment option to scroll programmatically.
// Use scrollPositionRestoration: 'enabled' to restore the previous scroll position when navigating back/forward in the browser (not just route changes).

// Lazy loading is a technique where feature modules are loaded on demand (only when the user navigates to them), rather than loading all modules upfront.
// This reduces initial load time and improves performance by splitting the app into smaller, manageable chunks.
// const routes: Routes = [
//     { path: 'hero', loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule) }
//   ];
  
// Route guards are mechanisms in Angular that control access to routes or prevent navigation based on specific conditions. They are used to protect routes, ensure data is loaded before navigation, or prompt users before leaving a route.
// Key Points:
// Purpose: Secure routes, prefetch data, or manage navigation flow based on logic (e.g., authentication, authorization, or unsaved changes).
// Types of Route Guards:
// CanActivate: Determines if a route can be accessed (e.g., checking if a user is logged in).
// CanActivateChild: Controls access to child routes of a parent route.
// CanDeactivate: Prevents navigation away from a route (e.g., prompting for unsaved changes).
// CanLoad: Prevents the loading of a lazy-loaded module (e.g., restricting access to a module).
// Resolve: Pre-fetches data before activating a route (e.g., loading user data).

// Use data to store metadata like page titles, breadcrumbs, or access roles.
// Access data in components to customize rendering or behavior.
// Combine with guards or resolvers for dynamic and static data management.