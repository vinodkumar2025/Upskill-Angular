import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, mergeMap, Observable, ReplaySubject, Subject, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
numberValue!:number;
 //Observables and subjects
//   student$: Observable<any>= new Observable((subscriber)=>{
//     subscriber.next('vinod'),
//     subscriber.next('kumar'),
//     subscriber.complete()
//   })
  
//   employee: Subject<string>=new Subject();

//   hero: BehaviorSubject<string> = new BehaviorSubject('vinod');

//   manager!: ReplaySubject<string>

//   ngOnInit(): void {
//     //stu stores the subsription object. by using this when can check the obsrvable status and we close them as well
//    const stu = this.student$.subscribe({
//       next:(val)=> console.log(val),
//       error:(err)=> console.log(err),
//       complete:()=>console.log('complated')      
//     })
//     this.hero.subscribe((val)=>console.log(val));
//     this.hero.next('kumar');
//     this.hero.subscribe((val)=>console.log(val));
//     this.hero.next('kumar1');
//     this.employee.subscribe(()=>console.log('method called'))
//     this.employee.next('test')
//     this.student$.subscribe({
//       next:(val)=> console.log(val,'second'),
//       error:(err)=> console.log(err, 'second' ),
//       complete:()=>console.log('complated')      
//     })
//   }

constructor(){
  // interval(2000).pipe(
  //   switchMap((x)=>interval(500))
  // ).subscribe((v)=>this.numberValue = v);
  // fromEvent(document,'click').pipe(
  //   switchMap(()=>interval(100))
  // ).subscribe((v)=>this.numberValue=v)
  // interval(1000).pipe(
  //   mergeMap(val => interval(500).pipe(take(3)))
  // ).subscribe(console.log);
}

}
