import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router"
import { HomeServiceService } from './home-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  username = localStorage.getItem("username");
  
  onSubmit(logout: NgForm) {
    this.router.navigate(['/login'])
    this.homeService.logout();
  }
  
}
