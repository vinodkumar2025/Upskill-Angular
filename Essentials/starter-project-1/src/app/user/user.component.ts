import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()user!:User;
  @Output() select = new EventEmitter();
  @Input({required:true}) selected!:boolean;

 get imagePath(){
  return '../../assets/'+ this.user.avatar;
 }

 onSelect(){
  this.select.emit(this.user.id);
 }
}