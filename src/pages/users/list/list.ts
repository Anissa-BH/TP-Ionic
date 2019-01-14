import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UsersProvider } from '../../../services/users';
import { EditPage } from '../../edit/edit';
import { Page } from 'ionic-angular/umd/navigation/nav-util';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class UsersList {

    usersList: any;
    pushPage:Page;

  constructor(private users:  UsersProvider, public navParams: NavParams) {
      alert(localStorage.getItem('email'));
    this.users.all().subscribe((usersTable: any)=> 
      {
          this.usersList = usersTable.hits.hits;
          console.log(usersTable.hits.hits);
          this.pushPage =EditPage;
      });
  }
}
