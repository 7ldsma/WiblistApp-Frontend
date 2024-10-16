import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  imports: [ 
    ReactiveFormsModule, 
    HttpClientModule, 
    CommonModule ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject( FormBuilder );

  private authService = inject( AuthService );

  private router = inject( Router )


  public myForm: FormGroup = this.fb.group({
    email: ['meli@gmail.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]]

  });


  login() {

    const { email, password } = this.myForm.value;
    
    this.authService.login( email, password )
      .subscribe({
        next: () => this.router.navigateByUrl( '/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error');
        }
        
      })
  }

}
