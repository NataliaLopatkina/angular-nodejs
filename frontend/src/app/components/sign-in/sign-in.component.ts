import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  profileForm: FormGroup;
  show: boolean = false;
  messageText: string;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }
  
  showPassword(input) {
    input.type = input.type === 'password' ? 'text' : 'password';
    this.show = this.show = !this.show;
  }

  @Input() notification;

  submit() {
    this.messageText = 'dsdsd'
    return this.http.post('http://localhost:3000', this.profileForm.value).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
        if(error.status == 200) {
          this.router.navigate(['/home'])
        }
      }
    )
  }
}
