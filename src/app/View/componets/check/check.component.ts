import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  constructor(public router:Router){}
  hide=true;
  step(){
   this.router.navigate(['login/code']);
  }
}
