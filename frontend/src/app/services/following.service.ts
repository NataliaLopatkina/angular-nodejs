import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FollowingService {
    constructor(private http: HttpClient) { }

    public addFollowing(following) {
        return this.http.post('http://localhost:3000/following', {following})
    }
}
