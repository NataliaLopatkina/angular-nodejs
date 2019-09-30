import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    private _menu: boolean = true;

    constructor() { }

    public get menu() {
        return this._menu;
    }

    public set menu(value: boolean) {
        this._menu = value;
    }

    public addMenu() {
        return this._menu = true;
    }

    public removeMenu() {
        return this._menu = false;
    }
}
