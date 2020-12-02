// routerConfig.ts
import {Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';  
import { AuthenticationGuardGuard } from './authentication-guard.guard';
import { AnonymousAuthenticationGuardGuard } from './anonymous-authentication-guard.guard';

const appRoutes: Routes = [
  { path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'home', 
    component: HomeComponent,
    canActivate:[AuthenticationGuardGuard]
  }
];

export default appRoutes;