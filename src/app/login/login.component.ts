import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from './login.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(){
  }

 onSubmit(login: NgForm) {
    const loginObserver = {
      next: () => console.log('Logging in'),
      error: (err: any) => alert('Wrong username or password!')
    }
    this.loginService.login(login.value).subscribe(loginObserver);
  }

}
