import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-my-posts',
    templateUrl: './my-posts.component.html',
    styleUrls: ['./my-posts.component.scss']
})

export class MyPostsComponent implements OnInit {
    type: string = 'MyPosts';
    posts: Post[] = [];

    constructor(
        private postService: PostService,
        private notificationService: NotificationService) { }

    ngOnInit() {
        this.postService.getPost(this.type).subscribe(
            (response) => {
                this.posts = response['posts'];
            },

            (error) => {
                const message = 'Posts not found!';
                this.notificationService.toggleNotification(message);
            }
        )
    }
}
