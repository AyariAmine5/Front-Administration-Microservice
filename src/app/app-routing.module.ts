import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/_services/authguard.service';
import { UserGuard } from 'src/_services/userguard.service';
import { AjouterRoleComponent } from './ajouter-role/ajouter-role.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { HomeComponent } from './home/home.component';
import { ListeLogsComponent } from './liste-logs/liste-logs.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'liste',
        component: ListeUtilisateurComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'ajouterutilisateur',
        component: AjouterUtilisateurComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'ajouterole',
        component: AjouterRoleComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'listeroles',
        component: ListeRoleComponent,
        canActivate: [UserGuard],
      },
      { path: 'logs', component: ListeLogsComponent, canActivate: [UserGuard] },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
