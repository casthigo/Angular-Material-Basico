import { Component, OnInit } from '@angular/core';

// Componentes
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { ActivatedRoute, Route, Router, RouterLink } from "@angular/router";

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from "../../../interfaces/user"
import { UserService } from '../../../services/user';
import { Users } from '../users/users';



@Component({
  selector: 'app-create-edit-user',
  imports: [MatToolbarModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, RouterLink, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './create-edit-user.html',
  styleUrl: './create-edit-user.scss'
})


export class CreateEditUser implements OnInit {
  idUser: number | undefined;
  action: String = "Add";

  form: FormGroup;
  constructor(private fb: FormBuilder, private userServices: UserService, private router: Router,
    private snackBar: MatSnackBar, private aRoute: ActivatedRoute) {


    this.form = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: ['', Validators.required],

    })

    this.idUser = this.aRoute.snapshot.params['id'];
    console.log(this.idUser);
  }

  ngOnInit(): void {
    if (this.idUser === undefined) {
      // Agraga usuaurio
      this.action = 'Edit';
    } else {
      // Edita uaurio

      console.log('EDOTAR---  ' + this.idUser);
      this.action = 'Edit';
      this.getUser(this.idUser);

    }
  }
  saveUser() {
    // console.log(this.form);

    const user: User = {
      userName: this.form.value.userName,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      sex: this.form.value.sex
    }

    if (this.idUser === undefined) {
      this.addUser(user);
    } else {
      this.editUser(user, this.idUser);
    }

  }

  addUser(user: User) {
    this.userServices.addUser(user);

    this.snackBar.open('El usuario fue agragado correctamente.', 'Cerrar', {
      //horizontalPosition: this.horizontalPosition,
      //verticalPosition: this.verticalPosition,
      duration: 1500,
    });

    this.router.navigate(["/dashboard/users"]);

  }
  getUser(idUser: number) {
    const user: User = this.userServices.getUser(idUser);

    console.log(user);

    this.form.patchValue({
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      sex: user.sex,
    })

  }

  editUser(user: User, idUser: number) {
    this.userServices.editUser(user, idUser);

    this.snackBar.open('El usuario fue actualizado correctamente.', 'Cerrar', {
      //horizontalPosition: this.horizontalPosition,
      //verticalPosition: this.verticalPosition,
      duration: 1500,
    });
  }
}
