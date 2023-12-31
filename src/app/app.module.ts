import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//angular material
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './View/pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './View/pages/login/login.component';
import { CheckComponent } from './View/componets/check/check.component';
import { CodeComponent } from './View/componets/code/code.component';
import { InformationComponent } from './View/componets/information/information.component';
import { HttpClientModule } from '@angular/common/http';
import { SinginComponent } from './View/componets/singin/singin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    CheckComponent,
    CodeComponent,
    InformationComponent,
    SinginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
