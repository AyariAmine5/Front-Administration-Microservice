import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  UserId: any;
  UserName: any;
  UserEmail: any;
  organizations: string[] = [];

  constructor(
    private userService: UserService,
    private token: TokenStorageService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.organizations = this.token.getUser().organizations;
    console.log(this.currentUser);
  }

  updateForm = new FormGroup({
    userName: new FormControl(''),
    Email: new FormControl(''),
  });

  updateUser(UpdateForm: NgForm) {
    console.log('Update user function');
    console.log(UpdateForm.value);
    this.userService
      .updateUser(
        this.token.getUser().id,
        UpdateForm.value.UserName,
        UpdateForm.value.UserEmail
      )
      .subscribe((data) => {});

    //this.getUser();
    this.reloadPage();
  }

  getUser() {
    this.token.saveUser(this.userService.getUser(this.token.getUser().id));
  }

  reloadPage(): void {
    window.location.reload();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
