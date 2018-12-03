import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Operator } from '../../services/operator';




@Component({
  selector: 'page-gb',
  templateUrl: 'gb.html'
})
export class GbPage {

	message:string;
  operation:FormGroup;

  constructor(public navCtrl: NavController, private alertCtrl:AlertController,private formBuilder:FormBuilder, public calculator:Operator) {

  	this.message='Welcome to my new page';
    this.operation=this.formBuilder.group({

            m1:["",Validators.min(0)],
            m2:["",Validators.min(0)],
            op:['+']
    });
  }
  calculate(){
    let result=this.calculator.calculate(this.operation);
    let alert=this.alertCtrl.create({
      title:'result',
      subTitle:'result',
      buttons:['close']
    });
    alert.present();
  }

}
