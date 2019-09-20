import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    return this.userService.getUsers(this.searchForm.value.search).subscribe(
      (response)=> {
        console.log(response)
      },

      (error)=> {
        console.log(error)
      }
    )
  }
}
