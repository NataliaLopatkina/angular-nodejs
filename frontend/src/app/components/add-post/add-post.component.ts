import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    })
  }

  submit() {
    return this.http.post('http://localhost:3000/add-post', this.postForm.value).subscribe(
      response => {
        console.log(response)
      },
      // error => {
      //   console.log(this.postForm)
      //   console.log(error.status)
      // }
    )
    // /console.log(this.postForm.value)
  }
}
