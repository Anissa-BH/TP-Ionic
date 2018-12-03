import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	alertMessage:string;

  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {

  }

  setA(){
    this.alertMessage='A';
    }
  
  setB(){
    this.alertMessage='B';
    }



}
