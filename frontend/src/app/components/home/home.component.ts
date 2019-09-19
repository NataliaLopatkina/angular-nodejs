import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  active: boolean = false;
  searchForm: FormGroup;
  error: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    })
  }

  toggleButton() {
    this.active = this.active = !this.active;
  }

  submit() {
    return this.http.post('http://localhost:3000/users', this.searchForm.value).subscribe(
      response => {
        console.log(response)
      },   

      error => {
        console.log(error)
      }
    )
  }
}
