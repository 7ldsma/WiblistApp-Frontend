import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from './auth/guards';

export const routes: Routes = [{

    path: 'auth',
    canActivate: [ isNotAuthenticatedGuard ],
    loadComponent: () => import('./auth/layouts/auth-layout/auth-layout.component'),
    children: [
        { path: 'login', 
            component: LoginPageComponent 
        },

        { path: 'register', 
            component: RegisterPageComponent 
        },

        { path: '**', 
            redirectTo: 'login' 
        }
    ],},
    {

    path: 'dashboard',
    canActivate: [ isAuthenticatedGuard ],
    loadComponent: () => import('./dashboard/layouts/dashboard-layout/dashboard-layout.component'),
    children: [
        {
            path: 'organized',
            title: 'Organized',
            loadComponent: () => import('./dashboard/pages/organized-gifts/organized-gifts.component')
        },
        {
            path: 'collaborated',
            title: 'Collaborated',
            loadComponent: () => import('./dashboard/pages/collaborated-in-gifts/collaborated-in-gifts.component')
        },
        {
            path: 'participated',
            title: 'Participated',
            loadComponent: () => import('./dashboard/pages/participated-in-gifts/participated-in-gifts.component')
        },
        {
            path: 'profile',
            title: 'Profile',
            loadComponent: () => import('./dashboard/pages/profile/profile.component')
        },
        {
            path: '',
            redirectTo: 'participated',
            pathMatch: 'full',
        }
    ] 
    
    },{
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    }



];
