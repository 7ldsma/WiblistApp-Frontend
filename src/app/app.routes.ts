import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';

export const routes: Routes = [{

    path: 'auth',
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
    loadComponent: () => import('./dashboard/layouts/dashboard-layout/dashboard-layout.component'),
    children: [
        {
            path: 'organized',
            title: 'Organized Gifts/Events',
            loadComponent: () => import('./dashboard/pages/organized-gifts/organized-gifts.component')
        },
        {
            path: 'collaborated',
            title: 'Collaborated-in Gifts/Events',
            loadComponent: () => import('./dashboard/pages/collaborated-in-gifts/collaborated-in-gifts.component')
        },
        {
            path: 'participated',
            title: 'Participated-in Gifts/Events',
            loadComponent: () => import('./dashboard/pages/participated-in-gifts/participated-in-gifts.component')
        },
    ] 
    
    }



];
