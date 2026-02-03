import { Injectable } from '@angular/core';
import { HttpService } from '../http/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://localhost:7139/api/User';

  constructor(private httpService: HttpService) {}

  login(data: any) {
    return this.httpService.postMethod(
      `${this.baseUrl}/Login`,
      data,
      false
    );
  }

  register(data: any) {
    return this.httpService.postMethod(
      `${this.baseUrl}/Register`,
      data,
      false
    );
  }

  forgetPassword(data: { email: string }) {
    return this.httpService.postMethod(
      `${this.baseUrl}/ForgetPassword`,
      data,
      false
    );
  }

  resetPassword(password: string, confirmPassword: string) {
  return this.httpService.postMethod(
    'https://localhost:7139/api/User/ResetPassword',
    {
      password: password,
      confirmPassword: confirmPassword
    },
    true
  );
}
}
