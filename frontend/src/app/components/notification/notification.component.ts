import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})

export class NotificationComponent implements OnInit {
    message: boolean;
    
    ngOnInit() {}

    notificationShow() {
        this.message = true;

        setTimeout(()=> {
            this.message = false;
        }, 3000)
    }
}
