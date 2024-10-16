import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-sidemenu',
  imports: [ RouterModule,  ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes
  .map( route => route.children ?? [] )
  .flat()
  .filter( route => route && route.path )
  .filter( route => !route.path?.includes( 'register' ) )
  .filter( route => !route.path?.includes('login') )
  .filter( route => !route.path?.includes('**') );
  

  private userService = inject( AuthService );

  public user = computed( () => this.userService.currentUser());

  constructor() {



  }


}
