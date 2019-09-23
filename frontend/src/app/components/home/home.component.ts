import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';
import { FollowingService } from '../../services/following/following.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService, FollowingService]
})

export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private followingService: FollowingService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    })
  }

  submit() {
    this.userService.getUsers(this.searchForm.value.search).subscribe(
      (users)=> {
        this.users = users['data'],
        console.log(this.users);
      }
    )
  }

  handlerFollowing(id) {
    console.log(id)
    this.followingService.addFollowing(id)
    //.subscribe(
      // (response)=> {
      //   console.log(response)
      // },

      // (error)=> {
      //   console.log(error);
      // }
    // )
  }
}
