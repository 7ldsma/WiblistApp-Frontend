import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  standalone: true,
  selector: 'app-sidemenu',
  imports: [ RouterModule ],
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
  



  constructor() {



  }


}
