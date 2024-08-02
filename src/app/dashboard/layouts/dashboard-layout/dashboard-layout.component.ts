import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '../../../shared/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  imports: [ RouterOutlet, SidemenuComponent ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export default class DashboardLayoutComponent {

}
