import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuResponsivo() {
    const menuNav = document.getElementById('menu-nav');
    if (menuNav.className === 'menu-nav') {
      menuNav.className += ' responsive';
    } else {
      menuNav.className = 'menu-nav';
    }
  }
}
