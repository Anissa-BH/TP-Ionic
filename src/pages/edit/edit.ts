import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UsersProvider } from '../../services/users';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

	message:string;
  userForm:FormGroup;
  userId: string;
  userName: string;
  userEmail: string;

  constructor(public navCtrl:NavController, private formBuilder:FormBuilder, private users:UsersProvider, public navParams: NavParams) {
    
    this.users.fillForm(this.navParams.get('id')).subscribe((result: any) => {
        this.userId = result._id;
        this.userName = result._source.name;
        this.userEmail = result._source.email;
    });
    
    this.userForm=this.formBuilder.group({

            id:["",Validators.required],
            name:["",Validators.required],
            email:["",Validators.email]
    });
  }
  
  userFormSubmit(){
    this.users.add(this.userForm.value).subscribe((result: any) => {
    });

} 
}
