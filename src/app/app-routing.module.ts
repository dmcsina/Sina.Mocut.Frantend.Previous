import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './View/pages/main/main.component';
import { LoginComponent } from './View/pages/login/login.component';
import { CheckComponent } from './View/componets/check/check.component';
import { CodeComponent } from './View/componets/code/code.component';
import { InformationComponent } from './View/componets/information/information.component';
import { LoginModule } from './+Controlls/routers/loginrouter/login/login.module';
import { SinginComponent } from './View/componets/singin/singin.component';

const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'login',component:LoginComponent,
  children:[
    {path:'',component:CheckComponent},
    {path:'check',component:CheckComponent},
    {path:'code',component:CodeComponent},
    {path:'singup',component:InformationComponent},
    {path:'singin',component:SinginComponent},
  ]
  },
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo :'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    LoginModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
