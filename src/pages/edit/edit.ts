import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl:NavController, private formBuilder:FormBuilder, private users:UsersProvider) {
    
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
