import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  constructor(public router:Router){}
  step(){
    this.router.navigate(['login/singup']);
   }
}
