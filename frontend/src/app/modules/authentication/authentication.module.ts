import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationRouterModule } from './authentication-router.module';

import { AuthenticationComponent } from './authentication.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
    declarations: [
        AuthenticationComponent,
        SignUpComponent,
        SignInComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [AuthenticationComponent]
})

export class AuthenticationModule { }
