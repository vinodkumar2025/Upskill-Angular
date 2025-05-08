import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
}
