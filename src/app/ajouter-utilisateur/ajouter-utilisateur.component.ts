import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/_services/user.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Identifiers } from '@angular/compiler';
import { Role } from 'src/_models/Role';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { RoleService } from 'src/_services/role.service';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css'],
})
export class AjouterUtilisateurComponent implements OnInit {
  roles: Role[];
  org: any;

  orgid: any;
  //selectedroles: Role[];

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    selectedroles: new FormControl(),
  });

  constructor(
    private userservice: UserService,
    private roleservice: RoleService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.GetOrganizationByName(user.organizations[0]);
    //this.getAllRoles();
    //this.getOrganizationRoles(this.orgid);
  }

  getAllRoles() {
    this.userservice.getAllRoles().subscribe((data) => {
      this.roles = data;
    });
  }

  getOrganizationRoles(id: number) {
    this.roleservice.getOrganizationRoles(id).subscribe((data) => {
      this.roles = data;
      console.log(this.roles);
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

  Adduser() {
    console.log('Adding User..');
    console.log(this.form.value);
    this.userservice
      .addUser(
        this.form.value.username,
        this.form.value.email,
        this.form.value.password,
        this.form.value.selectedroles,
        this.orgid
      )
      .subscribe((data) => {});
    console.log(this.orgid);
  }

  GetOrganizationByName(str: string) {
    this.userservice.GetOrganizationByName(str).subscribe((data) => {
      this.org = data;
      this.orgid = this.org.id;
      this.getOrganizationRoles(this.orgid);
      console.log(this.roles);
      console.log(this.orgid);
    });
  }

  onSubmit() {
    this.Adduser();
    console.log(this.form.value.selectedroles);
  }
}
