import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '../../../shared/sidemenu/sidemenu.component';
import { AuthService } from '../../../auth/services/auth.service';
import GiftLayoutComponent from '../gift-layout/gift-layout.component';

@Component({
  standalone: true,
  imports: [ RouterOutlet, SidemenuComponent, GiftLayoutComponent ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export default class DashboardLayoutComponent {



}
