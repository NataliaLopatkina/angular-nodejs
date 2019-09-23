import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post/post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss'],
  providers: [PostService],
})
export class MyPostsComponent implements OnInit {
  type: string = 'MyPosts';
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPost(this.type).subscribe(
      (posts)=> {
        this.posts = posts['data'];
      },

      (error)=> {
        console.log(error)
      }
    )
  }

}
