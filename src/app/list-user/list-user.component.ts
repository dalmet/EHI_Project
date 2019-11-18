import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:any= [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
      
  }

  deleteUser(user): void {
    this.users=this.userService.deleteUser(user.id)
    // this.userService.deleteUser(user.id)
    //   .subscribe( data => {
    //     this.users = this.users.filter(u => u !== user);
    //   })
  };

  editUser(user): void {
    //localStorage.removeItem("editUserId");
   // localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['/add-user',user.id]);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };

}
