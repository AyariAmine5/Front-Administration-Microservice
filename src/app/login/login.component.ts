import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/_services/auth.service';
import { RecordService } from 'src/_services/records.service';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  org: any;

  orgid: any;

  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private recordService: RecordService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        this.GetOrganizationByName(
          this.tokenStorage.getUser().organizations[0]
        );
        console.log(this.tokenStorage.getUser().organizations[0]);

        this.router.navigate(['/profile']);
        //this.reloadPage();
      },
      (err) => {
        this.errorMessage = err.error.message;
        console.log(err.error.message);
        this.isLoginFailed = true;
      }
    );
  }

  AddLog() {
    console.log('Adding Log entry...');
    this.recordService
      .addRecord(
        null,
        'xxx.xxx.xxx',
        'ok',
        'Login',
        this.tokenStorage.getUser().id,
        this.orgid
      )
      .subscribe((data) => {});
  }

  GetOrganizationByName(str: string) {
    this.userservice.GetOrganizationByName(str).subscribe((data) => {
      this.org = data;
      this.orgid = this.org.id;
      console.log(this.orgid);
      this.AddLog();
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  toregister() {
    this.router.navigate(['/register']);
  }
}
