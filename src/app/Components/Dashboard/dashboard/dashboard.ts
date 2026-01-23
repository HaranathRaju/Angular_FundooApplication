import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav';
import { TopNavComponent } from '../top-nav/top-nav';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    SideNavComponent,
    TopNavComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  expanded = true; // Google Keep default

  toggleSidenav() {
    this.expanded = !this.expanded;
  }
}