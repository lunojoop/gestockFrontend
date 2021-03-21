import { AuthGuardService } from './_helpers/auth-guard.service';
import { HomeComponent } from './_components/home/home.component';

import { ConnexionComponent } from './_components/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {
    path: 'login',
    component: ConnexionComponent
  },
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuardService]},
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
