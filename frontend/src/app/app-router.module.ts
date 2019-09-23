import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { FriendsPostsComponent } from './components/friends-posts/friends-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { NotFoundComponent } from './components/404/404.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    {
        path: '', component: SignInComponent
    },
    {
        path: 'sign-up', component: SignUpComponent
    },

    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard]
    },

    {
        path: 'my-posts', component: MyPostsComponent, canActivate: [AuthGuard]
    },

    {
        path: 'friends-posts', component: FriendsPostsComponent, canActivate: [AuthGuard]
    },

    {
        path: 'add-post', component: AddPostComponent, canActivate: [AuthGuard]
    },

    {
        path: '**', component: NotFoundComponent, canActivate: [AuthGuard]
    }
]
    
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}
