import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  postData(profileForm) {
    const body = { name: profileForm.name, email: profileForm.email, password: profileForm.password}
    return this.http.post('http://localhost:3000/sign-up', body); 
  }
}
