import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { User } from '../../models/user/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuth: boolean = false;

  constructor(private http: HttpClient) {}

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public provideAccess() {
    return this.isAuth;
  }

  public signIn(email, password) {
    return this.http.post<any>('http://localhost:3000/', { email, password })
      .pipe(map(user => {
        localStorage.setItem('token', JSON.stringify(user.token));
        this.isAuth = true;
      }));
  }

  public logout() {
    this.isAuth = false;
    localStorage.removeItem('token');
  }

  public signUp(user: User) {
    const data = { name: user.name, email: user.email, password: user.password };
    return this.http.post('http://localhost:3000/sign-up', data);
  }
}
