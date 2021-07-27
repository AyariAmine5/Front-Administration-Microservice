import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private roles: string[] = [];
  organization: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username?: string;

  org: any;

  orgid: any;

  constructor(
    private tokenStorageService: TokenStorageService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.GetOrganizationByName(user.organizations[0]);
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;

      //console.log(this.showAdminBoard);
      //console.log(this.showUserBoard);
    }
  }
  GetOrganizationByName(str: string) {
    this.userservice.GetOrganizationByName(str).subscribe((data) => {
      this.org = data;
      this.orgid = this.org.id;
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
