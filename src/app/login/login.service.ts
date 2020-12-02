import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL = 'http://localhost:3000/';


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(model: any){
    return this.http.post(this.apiURL+'user/login', model).pipe(
      map((response: any) => {
        const data = response;
        if(data.success == true){
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('username', data.username);
          this.router.navigate(['/home'])
        }else{
          alert('Invalid username or password!');
        }
      })
    );
  }

}
