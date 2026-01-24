import { Routes } from '@angular/router';
import { Login } from './Components/login/login';
import { Register } from './Components/register/register';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard';
import { NotesComponent } from './Components/Dashboard/notes/notes';
import { ForgetPasswordComponent } from './Components/forgetpassword/forgetpassword';
import { ResetPasswordComponent } from './Components/resetpassword/resetpassword';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
     { path: 'notes', component: NotesComponent },
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
    ]
  },
  {path : 'forgetpassword' ,component : ForgetPasswordComponent},
  { path : 'resetpassword',component : ResetPasswordComponent}
];
