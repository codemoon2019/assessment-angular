import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router"
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  constructor(
    private registerService: RegisterService,
    private router: Router
    ) { }

  ngOnInit(){
  }

  onSubmit(register: NgForm) {
    if(register.value.password != register.value.repassword){
      alert('Password not match!');
    }else{
      const registerObserver = {
        next: () => this.successRegistrationHandler(),
        error: (err: any) => alert('Username has already taken!')
      }
      this.registerService.register(register.value).subscribe(registerObserver);
    }
  }

  successRegistrationHandler(){
    alert('You are registered successfully!');
    this.router.navigate(['/login'])
  }

 

}
