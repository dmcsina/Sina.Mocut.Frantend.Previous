import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginform } from 'src/app/Model/Forms/Loginform';
import { LoginService } from 'src/app/Model/Servises/login.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  constructor(public router:Router ,
    ){}
  hide=true;
  form = new Loginform;
  step(){
   this.router.navigate(['login/code']);
   console.log(this.form.formLogin.controls.phoneNumber.value);
  }
}
