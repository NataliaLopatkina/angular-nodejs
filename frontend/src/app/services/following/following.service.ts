import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FollowingService {

    constructor(
        private http: HttpClient) { }

    public addFollowing(idFollowing) {
        return this.http.post('http://localhost:3000/following', idFollowing)
    }
}
