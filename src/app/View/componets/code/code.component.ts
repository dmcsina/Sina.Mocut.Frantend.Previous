import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Loginform } from 'src/app/Model/Forms/Loginform';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  constructor(public router:Router){}
  form=new Loginform;
  step(){
    this.router.navigate(['login/singup']);
    console.log(this.form.formLogin.controls.code.value)
   }
}
