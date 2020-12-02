import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(
    private router: Router
  ) {}

  logout(){

    localStorage.clear();
    
  }

}
