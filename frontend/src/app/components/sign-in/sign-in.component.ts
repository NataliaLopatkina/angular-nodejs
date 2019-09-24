import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
  
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {
  profileForm: FormGroup;
  type: string = 'password'
  show: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }
  
  togglePassword() {
    this.type = this.type === 'password' ? 'text' : 'password';
    this.show = this.show = !this.show;
  }

  submit() {
    return this.authService.signIn(this.profileForm.value)
    .subscribe(
      (data) => {
        this.router.navigateByUrl('/home');
      },

      (error) => {
        console.log(error)
      }
    )
  }
}
