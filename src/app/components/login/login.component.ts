import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(12) , Validators.minLength(5) ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private toastr: ToastrService){}
  
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }  
  
  
  onSubmit() {
    if (this.loginForm.valid) {
      this.toastr.success('¡Inicio de sesión exitoso!', 'Success');
      console.log('Form Submitted', this.loginForm.value);
    } else {
      this.toastr.error('Contraseña o usuario incorrecto', 'Error');
      console.log('Form is invalid');
    }
  }

}
