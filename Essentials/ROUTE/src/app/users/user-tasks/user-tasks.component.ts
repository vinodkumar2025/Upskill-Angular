import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../../../dummy-users';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports:[RouterModule]
})
export class UserTasksComponent {
  userName: string = '';
  user = DUMMY_USERS
  constructor(private activatedRoute: ActivatedRoute
  ){

  }
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('userId');
      this.userName = this.user.find((u)=>u.id === id)?.name??''
    });
  }
}
