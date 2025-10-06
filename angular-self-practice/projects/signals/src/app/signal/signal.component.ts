import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  name = signal<string>("123");
  tett = ''

  test(){
    this.name.set('tt')
  }

  ngOnInit() {
    // effect should be called inside constructor or ngOnInit
    effect(() => {
      console.log(this.name());
    });
  }

}
