import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { RoleService } from 'src/_services/role.service';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-ajouter-role',
  templateUrl: './ajouter-role.component.html',
  styleUrls: ['./ajouter-role.component.css'],
})
export class AjouterRoleComponent implements OnInit {
  form = new FormGroup({
    rolename: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private roleservice: RoleService) {}

  ngOnInit(): void {}

  get FormRoleName() {
    return this.form.get('rolename');
  }

  get FormRoleDescription() {
    return this.form.get('description');
  }

  AddRole() {
    console.log('Adding User..');
    console.log(this.form.value);
    this.roleservice
      .addRole(this.form.value.rolename, this.form.value.description, 1)
      .subscribe((data) => {});
  }
}
