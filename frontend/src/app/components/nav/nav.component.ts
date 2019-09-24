import { Component, OnInit, Output } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ToggleMenuService } from '../../services/toggle-menu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})

export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toggleMenuService: ToggleMenuService) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
  }
}
