import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-friends-posts',
    templateUrl: './friends-posts.component.html',
    styleUrls: ['./friends-posts.component.scss'],
    providers: [PostService]
})
export class FriendsPostsComponent implements OnInit {
    type: string = 'FriendsPosts';
    posts: Post[] = [];

    constructor(
        private postService: PostService,
        private notificationService: NotificationService) { }

    ngOnInit() {
        return this.postService.getPost(this.type).subscribe(
            (result) => {
                this.posts = result['data'];
            },

            (error) => {
                const message = 'Posts not found!';
                this.notificationService.toggleNotification(message);
            }
        )
    }
}
