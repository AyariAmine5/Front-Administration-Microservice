import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/_services/user.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Identifiers } from '@angular/compiler';
import { Role } from 'src/_models/Role';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css'],
})
export class AjouterUtilisateurComponent implements OnInit {
  roles: Role[];
  //selectedroles: Role[];

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    selectedroles: new FormControl(),
  });

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.getAllRoles();

    console.log(this.roles);
  }

  getAllRoles() {
    this.userservice.getAllRoles().subscribe((data) => {
      this.roles = data;
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
        this.form.value.selectedroles
      )
      .subscribe((data) => {});
  }

  onSubmit() {
    this.Adduser();
    console.log(this.form.value.selectedroles);
  }
}
