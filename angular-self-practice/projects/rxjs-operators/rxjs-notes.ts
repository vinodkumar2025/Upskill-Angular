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
