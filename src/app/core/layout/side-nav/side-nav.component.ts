import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from '../header-nav/header-nav.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',

  imports: [CommonModule, MatSidenavModule, MatListModule, RouterModule, HeaderNavComponent ],


})
export class SideNavComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}