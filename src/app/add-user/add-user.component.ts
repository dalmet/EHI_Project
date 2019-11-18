import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {first} from "rxjs/operators";
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private userService: UserService) { }

  addForm: FormGroup;
  user:any={};

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id') !== undefined){
     
      this.user = this.userService.getUserById(this.route.snapshot.paramMap.get('id'));
    }

    this.addForm = this.formBuilder.group({
      id: [],
      firstName: [this.user?this.user.firstName:'', Validators.required],
      lastName: [this.user?this.user.lastName:'', Validators.required],
      email: [this.user?this.user.email:'', Validators.email],
      phoneNumber:[this.user?this.user.phoneNumber:'', Validators.minLength(10)]
    });

  }

  onSubmit() {
    var data = this.addForm.value;
    
    if(this.user){
      data.id = this.route.snapshot.paramMap.get('id');
      this.userService.editUser(data);
    }
    else{
      this.userService.createUser(data)
    }
    
     this.router.navigate(['list-user']);
    
  }
  cancelButtonClicked(){
    this.router.navigate(['list-user']);
  }

}
