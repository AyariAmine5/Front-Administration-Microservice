import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { RoleService } from 'src/_services/role.service';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-liste-role',
  templateUrl: './liste-role.component.html',
  styleUrls: ['./liste-role.component.css'],
})
export class ListeRoleComponent implements OnInit {
  roles: Observable<any>;
  loading: boolean = true;
  org: any;

  orgid: any;

  constructor(
    private roleservice: RoleService,
    private confirmationService: ConfirmationService,
    private tokenStorageService: TokenStorageService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    //this.getOrganizationRoles(1);

    const user = this.tokenStorageService.getUser();
    this.GetOrganizationByName(user.organizations[0]);

    this.loading = false;
  }

  GetOrganizationByName(str: string) {
    this.userservice.GetOrganizationByName(str).subscribe((data) => {
      this.org = data;
      this.orgid = this.org.id;
      this.getOrganizationRoles(this.orgid);
      console.log(this.orgid);
    });
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
    //window.location.reload();
  }
}
