import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  register(model: any){

    return this.http.post(this.apiURL + 'user', model);

  }

}
