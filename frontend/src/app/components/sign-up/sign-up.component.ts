import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { MustMatch } from '../../helpers/must-match.validator';

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit {
    profileForm: FormGroup;
    typeFieldPassword: string = 'password';
    typeFieldConfirmPassword = 'password';
    showPassword: boolean = false;
    showConfirmPassword: boolean = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private notificationService: NotificationService,
        private router: Router) { }

    ngOnInit() {
        this.profileForm = this.fb.group({
            name: ['Natalia', Validators.required],
            email: ['nata.salimowa2015@yandex.ru', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            password: ['tosovu96', [Validators.required, Validators.minLength(5)]],
            confirmPassword: ['tosovu96', [Validators.required, Validators.minLength(5)]]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        })
    }

    togglePassword() {
        this.typeFieldPassword = this.typeFieldPassword === 'password' ? 'text' : 'password';
        this.showPassword = this.showPassword = !this.showPassword;
    }

    toggleConfirmPassword() {
        this.typeFieldConfirmPassword = this.typeFieldConfirmPassword === 'password' ? 'text' : 'password';
        this.showConfirmPassword = this.showConfirmPassword = !this.showConfirmPassword;
    }

    submit() {
        return this.authService.signUp(this.profileForm.value)
            .subscribe(
                (response) => {
                    this.router.navigate(['/'])
                },

                (error) => {
                    const text = 'User with this email is already registered!';
                    this.notificationService.toggleNotification(text);
                }
            )
    }
}
