import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FollowingService } from '../../services/following.service';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [UserService, FollowingService]
})

export class HomeComponent implements OnInit {
    searchForm: FormGroup;
    users: User[] = [];

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private followingService: FollowingService,
        private notificationService: NotificationService) { }

    ngOnInit() {
        this.searchForm = this.fb.group({
            search: ['']
        })
    }

    searchUser() {
        this.userService.getUsers(this.searchForm.value.search).subscribe(
            (users) => {
                this.users = users['data']
            },

            (error)=> {
                const message = 'Users not found!';
                this.notificationService.toggleNotification(message);
            }
        )
    }

    handlerFollowing(following) {
        this.followingService.addFollowing(following)
            .subscribe(
                (response) => {
                    console.log(response)
                    if (response == null) {
                        const message = 'You are added to the followers list of this user!';
                        this.notificationService.toggleNotificationInfo(message);
                    } else {
                        const message = 'You are removed from the followers list of this user!';
                        this.notificationService.toggleNotificationInfo(message);
                    }
                },

                (error) => {
                    console.log(error);
                }
            )
    }
}
