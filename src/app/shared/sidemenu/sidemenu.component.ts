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

  public extractRoutes = routes
  .flatMap(route => route.children ?? [])
  .flatMap(route => route.children ?? [])



  public menuItems = routes
  .flatMap(route => route.children ?? [])
  .flatMap(route => route.children ?? [])

  // .map( route => route.children ?? [] )
  // .flat()
  // .filter( route => route && route.path )
  // .filter( route => !route.path?.includes( 'register' ) )
  // .filter( route => !route.path?.includes('login') )
  // .filter( route => !route.path?.includes('profile') )  
  // .filter( route => !route.path?.includes('**') )


  

  private authService = inject( AuthService );

  public user = computed( () => this.authService.currentUser());

  constructor() {
    console.log(this.extractRoutes)


  }

  onLogout(){
    this.authService.logout();
  }


}
