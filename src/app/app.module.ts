import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjouterRoleComponent } from './ajouter-role/ajouter-role.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';

import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    ListeUtilisateurComponent,
    AjouterUtilisateurComponent,
    AjouterRoleComponent,
    ListeRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MultiSelectModule,
    AccordionModule,
    FormsModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
