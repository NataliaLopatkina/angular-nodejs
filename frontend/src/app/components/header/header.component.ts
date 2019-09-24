import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ToggleMenuService]
})
export class HeaderComponent implements OnInit {
  closeButton:boolean = false;

  constructor(private toggleMenuService: ToggleMenuService) { }

  ngOnInit() {
  }

  menuHandler() {
    this.toggleMenuService.toggleButton(this.closeButton);
  }
}
