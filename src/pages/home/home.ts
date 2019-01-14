import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UsersProvider } from '../../services/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  alertMessage:string;
  loginForm:FormGroup;
  loginlist : any;
  constructor(public navCtrl: NavController, private alertCtrl:AlertController, private formBuilder:FormBuilder, private users:UsersProvider) {
    
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
     
});

  }
  logOff(){
    localStorage.clear();
  }
  loginFormSubmit(){
    this.users.login(this.loginForm.value).subscribe((result: any) => {
    this.loginlist =result.hits.hits;
    alert(this.loginlist);
   
    if (this.loginlist.length == 0){
      alert('user nexiste pas');
    }
    else
    {
      localStorage.setItem('email', this.loginForm.value.email);
      
    }
    });

  }
  setA(){
    this.alertMessage='A';
    }
  
  setB(){
    this.alertMessage='B';
    }
}
