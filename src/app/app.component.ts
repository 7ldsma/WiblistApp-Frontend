import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'wiblistApp';

  private authService = inject( AuthService );

  public finishedAuthCheck = computed<boolean>(() => {
    if( this.authService.authStatus() === AuthStatus.checking ){
      return false;
    }

    return true;

  });

  public authStatusChangedEffect = effect(() => {
    console.log('authStatus:', this.authService.authStatus())
  })

}
