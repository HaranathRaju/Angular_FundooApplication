import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

 login(data: any) {
  const header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.httpService.postMethod(
    'https://localhost:7139/api/User/Login',data,false);
}


register(data:any){
   const header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.httpService.postMethod('https://localhost:7139/api/User/Register',data,false)
}
}