import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit {
  profileForm: FormGroup;
  error: any;
  show = false;
  response: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  showPassword(input) {
    input.type = input.type === 'password' ? 'text' : 'password';
    this.show = this.show = !this.show;
  }

  submit() {
    return this.http.post('http://localhost:3000/sign-up', this.profileForm.value).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error.status)
        if (error.status == 201) {
          this.router.navigate(['/'])
        }
      }
    )
  }
}
