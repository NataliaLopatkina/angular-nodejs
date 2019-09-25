import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ToggleMenuService {
    private _isOpened: boolean = false;

    public get isOpened(): boolean {
        return this._isOpened;
    }
    public set isOpened(value: boolean) {
        this._isOpened = value;
    }

    public toogleMenu() {
        this._isOpened = !this._isOpened;
    }
} 
