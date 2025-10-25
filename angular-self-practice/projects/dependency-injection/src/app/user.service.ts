import { Injectable } from "@angular/core";
import { User1Service } from "./user1.service";


@Injectable({
    providedIn: 'root'
})
export class UserService {

constructor(private tt: User1Service){
    console.log(this.tt)
}
}
