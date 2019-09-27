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
    typeSort: string = 'ascend';
    sortPostsList: Post[] = [];
    sortButton: boolean = false;

    constructor(
        private postService: PostService,
        private notificationService: NotificationService) { }

    ngOnInit() {
        return this.postService.getPost(this.type).subscribe(
            (response) => {
                this.posts = response['posts'];
                console.log(response)

                if (this.posts.length > 1) {
                    this.sortButton = true;
                }
            },

            (error) => {
                const message = 'Posts not found!';
                this.notificationService.toggleNotification(message);
                this.sortButton = false;
            }
        )
    }

    compareFunction(prev, next) {
        if (prev.date < next.date) {
            return -1
        } else if (prev.date > next.date) {
            return 1
        }
    }

    sortPosts() {
        this.typeSort = this.typeSort === 'ascend' ? 'descend' : 'ascend';

        if (this.typeSort === 'ascend') {
            this.sortPostsList = this.posts.sort(this.compareFunction)

        } else if (this.typeSort === 'descend') {
            this.sortPostsList = this.posts.sort(this.compareFunction).reverse();
        }
    }
}
