import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-friends-posts',
  templateUrl: './friends-posts.component.html',
  styleUrls: ['./friends-posts.component.scss'],
  providers: [PostService]
})
export class FriendsPostsComponent implements OnInit {
  id: number = 13;
  type: string = 'FriendsPosts';

  constructor(private postService: PostService) { }

  ngOnInit() {
    return this.postService.getPost(this.id, this.type).subscribe(
      (response)=>{
        console.log(response)
      },

      (error)=> {
        console.log(error)
      }
    )
  }

}
