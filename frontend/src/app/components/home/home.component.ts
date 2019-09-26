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
    typeSort: string = 'ascend';
    sortUsersList: User[] = [];
    sortButton: boolean = false;
    isActive: boolean = false;

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
            (response: any) => {
                this.users = response['users'];

                const message = 'Found ' + this.users.length + ' user(s)';
                this.notificationService.toggleNotificationInfo(message);

                if (this.users.length > 1) {
                    this.sortButton = true;
                }
            },

            (error)=> {
                const message = 'Users not found!';
                this.notificationService.toggleNotification(message);
                this.users = [];
                this.sortButton = false;
            }
        )
    }

    handlerFollowing(following) {
        this.followingService.addFollowing(following)
        .subscribe(
            (response:any) => {
                if (response.following) {
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

    compareFunction(prev, next) {
        if (prev.name < next.name) {
            return -1
        } else if (prev.name > next.name) {
            return 1
        }
    }

    sortUsers() {
        this.typeSort = this.typeSort === 'ascend' ? 'descend' : 'ascend';

        if (this.typeSort === 'ascend') {
            this.sortUsersList = this.users.sort(this.compareFunction)

        } else if (this.typeSort === 'descend') {
            this.sortUsersList = this.users.sort(this.compareFunction).reverse();
        }
    }
}
