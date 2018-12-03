import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UsersProvider } from '../../../services/users';





@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class UsersList {

    usersList: any;
    //user: any;

  constructor(private users:  UsersProvider, public navParams: NavParams) {
      this.users.all().subscribe((usersTable: any)=> 
      {
          this.usersList = usersTable;
      });

  }

 



}
