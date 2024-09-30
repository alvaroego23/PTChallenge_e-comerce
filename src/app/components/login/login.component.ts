import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private toastr: ToastrService, private router: Router){}
  
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }  
  
  
  onSubmit() {
    if (this.loginForm.valid) {
      this.toastr.success('¡Inicio de sesión exitoso!', 'Success');
      console.log('Form Submitted', this.loginForm.value);
      this.router.navigate(['/products']);      
      
    } else {
      this.toastr.error('Contraseña o usuario incorrecto', 'Error');
      console.log('Form is invalid');
    }
  }

}
