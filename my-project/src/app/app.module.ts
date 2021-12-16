import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
  import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';


const routes: Routes = [
  {path:'login', component: HomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

  @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }

  
