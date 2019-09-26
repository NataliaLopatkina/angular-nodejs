import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
    isAuth: boolean = false;
    private _userName: string;

    constructor(
        private http: HttpClient,
        private router: Router) {
    }

    public signUp(user: User) {
        const data = { name: user.name, email: user.email, password: user.password };
        return this.http.post('http://localhost:3000/sign-up', data);
    }

    public provideAccess() {
        return this.isAuth;
    }

    public signIn(user: User) {
        const data = { email: user.email, password: user.password }
        return this.http.post<any>('http://localhost:3000/', data)
            .pipe(map(data => {
                localStorage.setItem('token', JSON.stringify(data.token));
                this.userName = data.user.name;
                this.isAuth = true;
            }));
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public get userName(): string {
        return this._userName;
    }

    public set userName(value: string) {
        this._userName = value;
    }

    public getUserName() {
        this._userName = this.userName;
    }

    public logout() {
        this.isAuth = false;
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }
}
