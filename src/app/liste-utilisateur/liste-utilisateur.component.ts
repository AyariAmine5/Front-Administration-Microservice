import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleService } from 'src/_services/role.service';
import { UserService } from 'src/_services/user.service';
import { ConfirmationService } from 'primeng/api';
import { UpdateComponent } from '../update/update.component';
import { DialogService } from 'primeng/dynamicdialog';
import { TokenStorageService } from 'src/_services/token-storage.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css'],
})
export class ListeUtilisateurComponent implements OnInit {
  users: Observable<any>;
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  roles: Observable<any>;
  organizations: Observable<any>;
  org: any;

  orgid: any;

  constructor(
    private userservice: UserService,
    private roleservice: RoleService,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    //this.getAllUsers();
    const user = this.tokenStorageService.getUser();
    this.organizations = user.organizations;
    this.GetOrganizationByName(user.organizations[0]);

    //this.getOrganizationRoles(this.orgid);

    this.loading = false;
  }

  show(user) {
    const ref = this.dialogService.open(UpdateComponent, {
      data: {
        user: user,
      },
      width: '50%',
    });
  }

  getAllUsers() {
    this.userservice.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.userservice.deleteUser(id).subscribe((data) => {});
    window.location.reload();
  }

  getOrganizationRoles(id: number) {
    this.roleservice.getOrganizationRoles(id).subscribe((data) => {
      this.roles = data;
    });
  }

  getOrganizationUsers(id: number) {
    this.userservice.getOrganizationUsers(id).subscribe((data) => {
      this.users = data;
    });
  }

  GetOrganizationByName(str: string) {
    this.userservice.GetOrganizationByName(str).subscribe((data) => {
      this.org = data;
      this.orgid = this.org.id;
      this.getOrganizationUsers(this.orgid);
      this.getOrganizationRoles(this.orgid);
    });
  }

  confirm(id) {
    this.confirmationService.confirm({
      message: 'êtes vous sûr?',
      accept: () => {
        this.deleteUser(id);
      },
    });
  }
}
