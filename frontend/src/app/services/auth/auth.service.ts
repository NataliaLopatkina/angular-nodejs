import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user/user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public signIn(user: User) {
    const data = {email: user.email, password: user.password};
    return this.http.post('http://localhost:3000/', data, {observe: 'response'});
  }

  public signUp(user: User) {
    const data = {name: user.name, email: user.email, password: user.password};
    return this.http.post('http://localhost:3000/sign-up', data, {observe: 'response'});
  }
}
