import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmationService } from 'primeng/api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjouterRoleComponent } from './ajouter-role/ajouter-role.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';

import { ListeLogsComponent } from './liste-logs/liste-logs.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/_services/authguard.service';
import { authInterceptorProviders } from 'src/_helpers/auth.interceptor';
import { UserGuard } from 'src/_services/userguard.service';
import { UpdateComponent } from './update/update.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeUtilisateurComponent,
    AjouterUtilisateurComponent,
    AjouterRoleComponent,
    ListeRoleComponent,
    ListeLogsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    UpdateComponent,
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
    TabViewModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
  ],
  providers: [
    ConfirmationService,
    authInterceptorProviders,
    AuthGuard,
    UserGuard,
    DialogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
