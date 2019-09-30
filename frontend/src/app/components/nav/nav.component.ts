import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})

export class NavComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private toggleMenuService: ToggleMenuService,
        private menuService: MenuService) { }

    ngOnInit() {
    }

    logOut() {
        this.authService.logout();
    }
}
