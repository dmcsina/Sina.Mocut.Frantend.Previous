import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './View/pages/main/main.component';
import { LoginComponent } from './View/pages/login/login.component';

const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo :'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
