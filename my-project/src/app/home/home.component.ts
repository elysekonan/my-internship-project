import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
]
