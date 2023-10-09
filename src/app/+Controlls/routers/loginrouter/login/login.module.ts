import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckComponent } from 'src/app/View/componets/check/check.component';
import { CodeComponent } from 'src/app/View/componets/code/code.component';
import { InformationComponent } from 'src/app/View/componets/information/information.component';

const routes: Routes = [
  {path:'check',component:CheckComponent},
  {path:'code',component:CodeComponent},
  {path:'singup',component:InformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginModule { }
