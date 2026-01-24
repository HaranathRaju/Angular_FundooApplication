import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../Services/user/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',  
  templateUrl: './forgetpassword.html', 
  styleUrls: ['./forgetpassword.css']  , 
  imports :[RouterModule,MatCardModule,FormsModule,ReactiveFormsModule,CommonModule]

})
export class ForgetPasswordComponent implements OnInit {

  forgetForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgetForm.valid) {
      const emailData = this.forgetForm.value;

      this.userService.forgetPassword(emailData).subscribe({
        next: (res) => {
          this.snackBar.open('Reset link sent to your email', 'Close', {
            duration: 3000
          });
          this.forgetForm.reset();
          this.router.navigate(['/resetpassword']); 
        },
        error: (err) => {
          this.snackBar.open(
            err.error?.message || 'Something went wrong',
            'Close',
            { duration: 3000 }
          );
        }
      });
    } else {
  
      this.forgetForm.markAllAsTouched();
    }
  }
}
