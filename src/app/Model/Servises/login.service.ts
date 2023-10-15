import { Injectable } from '@angular/core';
import { Loginform } from '../Forms/Loginform';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public form :Loginform) { }
  dto(sina:FormControl){
    // this.form.loginForm.controls.phoneNumber=sina;
    console.log(sina);
  }
}
