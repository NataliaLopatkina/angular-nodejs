import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
    private _notification: boolean = false;
    private _notificationText: string;
    private _notificationInfo: boolean = false;

    constructor() { }

    public get notification() {
        return this._notification;
    }

    public set notification(value: boolean) {
        this._notification = value;
    }

    public get notificationText(): string {
        return this._notificationText;
    }

    public set notificationText(value: string) {
        this._notificationText = value;
    }

    public get notificationInfo() {
        return this._notificationInfo;
    }

    public set notificationInfo(value: boolean) {
        this._notificationInfo = value;
    }

    public toggleNotification(message) {
        this._notification = true;
        this._notificationText = message;
        this._notificationInfo = false;

        setTimeout(() => {
            this._notification = false;
        }, 3000)
    }

    public toggleNotificationInfo(message) {
        this._notification = true;
        this._notificationText = message;
        this._notificationInfo = true;

        setTimeout(() => {
            this._notification = false;
        }, 5000)
    }

    public removeNotification() {
        this._notification = false;
    }
}
