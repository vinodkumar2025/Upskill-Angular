// ✅ Observable
// An Observable is a data source that emits a stream of values over time, which can be observed by subscribers.
// It is unicast: each subscriber gets a separate execution.
// It is read-only — values are emitted internally, not manually from outside.

import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => subscriber.complete(), 1000);
});

observable.subscribe(value => console.log(value)); // Output: 1, 2

// ✅ Subject
// A Subject is both an Observable and an Observer.
// It is multicast: all subscribers share the same stream.
// You can manually emit values using next().

const subject = new Subject<number>();
subject.subscribe(value => console.log(`Subscriber 1: ${value}`));
subject.subscribe(value => console.log(`Subscriber 2: ${value}`));
subject.next(1); // Output: Subscriber 1: 1, Subscriber 2: 1

// ✅ BehaviorSubject
// Stores the latest value and emits it immediately to new subscribers.
// Requires an initial value.
// Returns latest initial+future values to the new subscribers

const behavior$ = new BehaviorSubject<number>(0); // Initial value: 0
behavior$.subscribe(val => console.log('Behavior A:', val));//Output: 0 1 2
behavior$.next(1);
behavior$.next(2);
behavior$.subscribe(val => console.log('Behavior B:', val)); // Output: 2

// ✅ ReplaySubject
// Replays a specified number of past values to new subscribers.

const replay$ = new ReplaySubject<number>(2); // Stores last 2 values
replay$.next(1);
replay$.next(2);
replay$.next(3);
replay$.subscribe(val => console.log('Replay A:', val)); // Output: 2, 3

// ✅ AsyncSubject
// Emits only the last value and only when complete is called.

const async$ = new AsyncSubject<number>();
async$.subscribe(val => console.log('Async A:', val));
async$.next(1);
async$.next(2);
async$.next(3);
async$.subscribe(val => console.log('Async B:', val));
async$.next(4); // Only this value will be emitted
async$.complete(); // Triggers emission: Output: 4 for both subscribers

// ✅ Comparison Table (for reference only - not executable)
/*
| Type             | Starts With     | New Subscribers Receive             | Use Case                                      |
|------------------|------------------|--------------------------------------|-----------------------------------------------|
| Subject          | Nothing           | Only future values                   | Event bus, notifications                      |
| BehaviorSubject  | Initial value     | Last emitted + future                | Shared state (auth, UI toggles, etc.)         |
| ReplaySubject    | History           | All (or N) past values + future      | Chat history, logs                            |
| AsyncSubject     | Emits on complete | Just the last value (after complete) | Caching one-time events (e.g. API responses)  |
*/

// switchMap maps each value from the source (outer) observable to a new inner observable and cancels the previous inner observable as soon as a new value is emitted.
// Only the latest inner observable is active.
// Previous inner observables are unsubscribed (canceled).
// Useful for tasks where only the latest result matters (e.g., live search, route changes, autocomplete).

// mergeMap maps each value from the source (outer) observable to a new inner observable.
// All inner observables are subscribed to concurrently (in parallel).
// Emissions from inner observables are merged into one output observable as they arrive.
// No order is guaranteed in the output; emissions can interleave.
// Useful for tasks like parallel HTTP requests or processing streams independently.

// concatMap maps each value from the source (outer) observable to a new inner observable.
// Inner observables are subscribed to sequentially — one after another.
// The next inner observable starts only after the previous one completes.
// Preserves order of emissions from the outer observable.
// Useful for scenarios where the order matters (e.g., queued tasks, dependent API calls).


// ✅ RxJS Operator Comparison Table 
/*
| Operator    | Subscribes Inner | Cancels Previous Inner | Output Order     | Use Case                               |
|-------------|------------------|------------------------|------------------|----------------------------------------|
| mergeMap    | Concurrently     | ❌ No                  | Unordered        | Parallel tasks (e.g., file uploads)     |
| concatMap   | Sequentially     | ❌ No                  | Ordered          | Queued operations (e.g., saving steps)  |
| switchMap   | Latest only      | ✅ Yes                 | Latest only      | Live search, autocomplete               |
*/

// exhaustMap maps each value from the source (outer) observable to a new inner observable.
// While an inner observable is active, new outer emissions are ignored (not subscribed).
// Only one inner observable can be active at a time.
// Useful for preventing duplicate actions (e.g., button spamming, form resubmits).
// Ideal when you want to ignore incoming events until the current task completes.

// combineLatest combines the latest values from multiple source observables.
// It waits until all observables have emitted at least once before emitting.
// After that, it emits a new array of latest values whenever any source emits.
// The output contains the most recent values from all sources.
// Useful for syncing multiple streams (e.g., form inputs, filters, live data).
