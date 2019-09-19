import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  closed = false;

  toggleMenu() {
    this.closed = this.closed = !this.closed;
  }

  constructor() { }

  ngOnInit() {
  }

  @Input() menu;

}
