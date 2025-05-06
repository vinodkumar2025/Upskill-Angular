import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  id:string='';
  constructor(private route: ActivatedRoute){
    route.paramMap.subscribe((og)=>{
      this.id = og.get('id')!;
    })
  }
}
