import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  constructor(public userService: UserService) { }

 async ngOnInit(){
    this.users = await this.userService.getUsers();
  }

}
