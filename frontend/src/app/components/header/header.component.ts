import { Component, OnInit } from '@angular/core';

import { ToggleMenuService } from '../../services/toggle-menu.service';
import { AuthService } from '../../services/auth.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  constructor(
    private toggleMenuService: ToggleMenuService,
    private authService: AuthService,
    private menuService: MenuService) { }

  ngOnInit() {
    this.authService.getUserName();
  }

  menuHandler() {
    this.toggleMenuService.toogleMenu();
  }

}
