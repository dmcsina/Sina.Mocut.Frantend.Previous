import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { Loginform } from 'src/app/Model/Forms/Loginform';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
  constructor(public rout:Router){}
    form =new Loginform
  hide=true;
    step(){
      this.rout.navigate(['home']);
    }
}
