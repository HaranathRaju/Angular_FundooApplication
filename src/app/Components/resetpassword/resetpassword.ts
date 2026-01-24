import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../Services/user/user';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-reset-password',
  templateUrl: './resetpassword.html',
  styleUrls: ['./resetpassword.css'],
  imports : [RouterModule,ReactiveFormsModule,CommonModule,MatCardModule,MatButtonModule
  ]
})
export class ResetPasswordComponent implements OnInit {

  resetForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetForm = this.fb.group(
      {
        newpassword: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const newPass = form.get('newpassword')?.value;
    const confirmPass = form.get('confirmpassword')?.value;

    return newPass === confirmPass
      ? null
      : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }

    const { newpassword, confirmpassword } = this.resetForm.value;

    this.userService.resetPassword(newpassword, confirmpassword)
      .subscribe({
        next: (res: any) => {
          alert('Password reset successful');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          alert('Something went wrong. Please try again.');
        }
      });
  }
}
