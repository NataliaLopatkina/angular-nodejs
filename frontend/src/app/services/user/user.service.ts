import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    public getUsers(valueSearch) {
        const params = { value: valueSearch }
        return this.http.get('http://localhost:3000/users', { params })
    }
}
