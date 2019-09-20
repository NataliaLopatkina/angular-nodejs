import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { FriendsPostsComponent } from './components/friends-posts/friends-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { NotFoundComponent } from './components/404/404.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { NotificationComponent } from './components/notification/notification.component';

import { TokenGuard } from './guard/token.guard';

import { TogglePasswordDirective } from './directives/toggle-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    MyPostsComponent,
    FriendsPostsComponent,
    AddPostComponent,
    NotFoundComponent,
    NotificationComponent,
    TogglePasswordDirective,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
