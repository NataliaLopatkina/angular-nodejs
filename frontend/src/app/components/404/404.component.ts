import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-404',
    templateUrl: './404.component.html',
    styleUrls: ['./404.component.scss'],
})

export class NotFoundComponent implements OnInit{ 
    constructor(private menuService: MenuService){}

    ngOnInit() {
        this.menuService.removeMenu();
    }
}
