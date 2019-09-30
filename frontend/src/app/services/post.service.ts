import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) {}

    public addPost(post: Post) {
        const data = { text: post.text, title: post.title, data: post.data, author: post.authorId }
        return this.http.post('http://localhost:3000/add-post', data)
    }

    public getPost(type) {
        const params = { type: type }
        return this.http.get('http://localhost:3000/posts', { params })
    }
}
