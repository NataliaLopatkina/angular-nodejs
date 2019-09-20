import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss'],
  providers: [PostService],
})
export class MyPostsComponent implements OnInit {

  id: number = 15;
  type: string = 'MyPosts';

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPost(this.id, this.type).subscribe(
      (response)=> {
        console.log(response)
      },

      (error)=> {
        console.log(error)
      }
    )
  }

}
