import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Loginform } from 'src/app/Model/Forms/Loginform';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  constructor(public router :Router){}
  form=new Loginform;
  hide=true;
  step(){
    this.router.navigate(['login/singin']);
  }
}
