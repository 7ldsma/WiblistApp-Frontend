import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '../../../shared/sidemenu/sidemenu.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  standalone: true,
  imports: [ RouterOutlet, SidemenuComponent ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export default class DashboardLayoutComponent {



}
