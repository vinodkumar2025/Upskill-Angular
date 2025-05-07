// ------------------------------
// Template-Driven Forms in Angular
// ------------------------------

// Two-way Data Binding:
// [(ngModel)] binds input to the component model.
// Updates in the input reflect in the model, and vice versa.

// Automatic Form Tracking:
// ngForm automatically tracks form state —
// including value, validity, touched/untouched, dirty/pristine, etc.

// Built-in Validators:
// Use HTML attributes like required, minlength, maxlength, pattern, email
// to apply validation directly on form controls.

// Template References:
// Use template reference variables like #email="ngModel" to access control state:
// Example:
// <input name="email" ngModel required #email="ngModel" />
// <p *ngIf="email.invalid && email.touched">Email is required</p>

// Minimal Component Logic:
// Most form-related logic stays in the template,
// making it easy to set up and manage simple forms.
