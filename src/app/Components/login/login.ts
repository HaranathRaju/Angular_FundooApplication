import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user/user';
import { PopupService } from '../../Services/shared/popup';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports:[FormsModule,CommonModule,MatCardModule,ReactiveFormsModule, RouterModule]
})
export class Login implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router,
    private popup: PopupService
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.user.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        console.log(res.message);
        
        console.log(res.data.message);
      
        if (res.message === 'Login successful') {
          localStorage.setItem('token', res.data);
          this.popup.success(res.message, 'Success');
          this.router.navigate(['/dashboard/notes']);
        } 
      },
      error: (err) => {
        const message =
          err?.error?.Message ||
          err?.error?.message ||
          'Server error. Please try again';

        this.popup.error(message, 'Error');
      }
    });
  }
}
