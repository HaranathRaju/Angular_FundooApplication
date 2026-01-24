import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../Services/user/user';
import { PopupService } from '../../Services/shared/popup';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  showPassword = false;
  registerForm: any;

  constructor(
  private fb: FormBuilder,
  private userService: UserService,
  private popup: PopupService,
  private router: Router
  ) { 

  }

  ngOnInit(): void {
  this.registerForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    },
    { validators: this.passwordMatchValidator }
    );
  } 

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  }

  togglePassword() {
  this.showPassword = !this.showPassword;
  console.log('showPassword:', this.showPassword);
  }

  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched(); 
      return;
    }

    const payload = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.username, 
      password: this.registerForm.value.password
    };

    this.userService.register(payload).subscribe({
      next: (res: any) => {
  
        this.popup.success(res.message || 'Registered successfully', 'Success');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        const message =
          err?.error?.message ||
          err?.error?.Message ||
          'Server error. Please try again';

        this.popup.error(message, 'Error');
      }
    });
  }
}
