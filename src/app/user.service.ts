import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

   Users = [{id: 0, firstName: 'Suraj', lastName: 'Chougule', email: 'Suraj@gmail.com',phoneNumber:1234567890},
      {id: 1, firstName: 'swati', lastName: 'Chougule', email: 'swati@gmail.com',phoneNumber:1234565432},
      {id: 2, firstName: 'pavan', lastName: 'patil', email: 'pavan@gmail.com',phoneNumber:1871265432},
      {id: 3, firstName: 'kajal', lastName: 'patil', email: 'kajal@gmail.com',phoneNumber:1987665432},
    ];

    getUsers() {
      return this.Users;
    }

    deleteUser(id){

      this.Users.splice(id,1) 
      return this.Users;

    }
    createUser(data){
      data.id = this.Users.length;
      this.Users.push(data)

    }
    editUser(data)
    {
      this.Users.splice(data.id,1);
      this.Users[data.id] = data;
    }
    getUserById(id){
      return this.Users[id];
    }
  

  
}
