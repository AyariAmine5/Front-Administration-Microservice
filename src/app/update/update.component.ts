import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { Role } from 'src/_models/Role';
import { RoleService } from 'src/_services/role.service';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  idcustomer: number;
  username: string;
  user: any;
  roles: Role[];

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    selectedroles: new FormControl(),
  });

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private userservice: UserService,
    private roleservice: RoleService
  ) {}

  ngOnInit(): void {
    this.user = this.config.data.user;
    //this.getUser(this.idcustomer);

    //this.username = this.user.username;
    this.initializeForm();

    console.log(this.user);
  }

  initializeForm() {
    this.form.setValue({
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
      selectedroles: this.user.roles,
    });
  }

  get FormUserName() {
    return this.form.get('username');
  }

  get FormEmail() {
    return this.form.get('email');
  }

  get FormPassword() {
    return this.form.get('password');
  }

  get FormRoles() {
    return this.form.get('selectedroles');
  }

  getOrganizationRoles(id: number) {
    this.roleservice.getOrganizationRoles(id).subscribe((data) => {
      this.roles = data;
    });
  }

  Adduser() {}
}
