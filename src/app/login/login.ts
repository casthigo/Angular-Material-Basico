import { Component } from '@angular/core';

// Componentes
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule, MatSnackBarHorizontalPosition, 
 MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
  
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatSnackBarModule,
    MatProgressSpinnerModule, NgIf
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  loading: boolean=false;


  constructor(private fm: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.form = this.fm.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    })

  }

  login() {
    //console.log("entrando al ts.......");

    const usuario: string = this.form.value.usuario;
    const clave: string = this.form.value.clave;
    console.log(this.form);
    console.log(usuario);
    console.log(clave);

    if (usuario === 'x' && clave === 'xx') {
        this.fakeLoading();
    } else {

      this.error();
      this.form.reset();

    }
    
  }

  error() {
     this.snackBar.open('Datos incorrectos de acceso.', 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration:3000,
      });
  }

  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{
      this.loading=false;
      this.router.navigate(['/dashboard']);
    },2000)
  }
}
1