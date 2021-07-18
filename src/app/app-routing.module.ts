import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterRoleComponent } from './ajouter-role/ajouter-role.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';

const routes: Routes = [
  { path: 'liste', component: ListeUtilisateurComponent },
  { path: 'ajouterutilisateur', component: AjouterUtilisateurComponent },
  { path: 'ajouterole', component: AjouterRoleComponent },
  { path: 'listeroles', component: ListeRoleComponent },
  { path: '', redirectTo: 'liste', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
