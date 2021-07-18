import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleService } from 'src/_services/role.service';
import { UserService } from 'src/_services/user.service';
import { ConfirmationService } from 'primeng/api';

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

  constructor(
    private userservice: UserService,
    private roleservice: RoleService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getOrganizationRoles(1);
    this.loading = false;
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

  confirm(id) {
    this.confirmationService.confirm({
      message: 'êtes vous sûr?',
      accept: () => {
        this.deleteUser(id);
      },
    });
  }
}
