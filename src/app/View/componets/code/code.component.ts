import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keypress } from 'src/app/Model/Forms/Keypress';
import { Loginform } from 'src/app/Model/Forms/Loginform';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit  {
  constructor(public router:Router){}
  form=new Loginform;
  keypress=new Keypress;
  timeLeft:any=60;
  ngOnInit(): void {
    this.startTimer();
  };
  startTimer() {
    setInterval(() => {
      if (this.timeLeft > 1) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }
  step(){
    this.router.navigate(['login/singup']);
    console.log(this.form.formLogin.controls.code.value);
   }
}
