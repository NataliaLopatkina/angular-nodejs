import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService]
})

export class HomeComponent implements OnInit {
  active: boolean = false;
  searchForm: FormGroup;
  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    })
  }

  toggleButton() {
    this.active = this.active = !this.active;
  }

  submit() {
    this.userService.getUsers(this.searchForm.value.search).subscribe(
      (data)=> {
        this.users = data['data'],
        console.log(this.users);
      }
    )
  }
}
