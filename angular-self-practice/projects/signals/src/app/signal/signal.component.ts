import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {

  name1 = signal<string>('test123');
  tett = 'teest'
  testarr = signal<number[]>([1,2,3])

  test(){
    this.name1.set('tt')
    this.name1.update(val=>val+'test')
    
  }

  constructor(){
    // effect should be called inside constructor or ngOnInit
    effect(() => {
      console.log(this.name1());
    });
  }
  ngOnInit() {
    
  }

}
