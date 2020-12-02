import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {

  constructor() { }

  getAccessToken(){  
    return !!localStorage.getItem("token");  
  }  

}

