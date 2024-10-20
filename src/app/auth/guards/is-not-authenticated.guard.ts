import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';
import { isPlatformBrowser } from '@angular/common';



export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {


  const url = state.url;
  let platformId = inject(PLATFORM_ID);

  if(platformId && isPlatformBrowser(platformId)){

    localStorage.setItem('url', url)
  }

  const authService = inject(AuthService);
  const router      = inject( Router );
  

  if ( authService.authStatus() === AuthStatus.authenticated ){
    router.navigateByUrl('/dashboard')
    return false;
  }

  return true;
};
