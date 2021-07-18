import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { RoleService } from 'src/_services/role.service';

@Component({
  selector: 'app-liste-role',
  templateUrl: './liste-role.component.html',
  styleUrls: ['./liste-role.component.css'],
})
export class ListeRoleComponent implements OnInit {
  roles: Observable<any>;
  loading: boolean = true;

  constructor(
    private roleservice: RoleService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getOrganizationRoles(1);
    this.loading = false;
  }

  getOrganizationRoles(id: number) {
    this.roleservice.getOrganizationRoles(id).subscribe((data) => {
      this.roles = data;
    });
  }

  confirmdelete(id) {
    this.confirmationService.confirm({
      message: 'êtes vous sûr?',
      accept: () => {
        this.deleteRole(id);
      },
    });
  }

  deleteRole(id: number) {
    this.roleservice.deleteRole(id).subscribe((data) => {});
    window.location.reload();
  }
}
