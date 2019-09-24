import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class ToggleMenuService {

    public toggleMenu(openMenu) {
        openMenu = !openMenu;
    }

    public toggleButton(closeButton) {
        closeButton = !closeButton;
    }
} 
