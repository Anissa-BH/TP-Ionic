import { Injectable } from '@angular/core';

@Injectable()
export class Operator{

 

  constructor() {

  }

  calculate(operation){

    let form = operation.value;
    console.log(form)
    let result;
    switch(form.op){
      case '+' :
        result= form.m1 + form.m2;
        break;
      case '-' :
        result=form.m1-form.m2;
        break; 
      case '*' :
        result=form.m1*form.m2;
        break; 
      case '/' :
        result=form.m1/form.m2;
        break;
      default:
        result='error';
    }
    }
  }