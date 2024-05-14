import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ILogin, ILoginResponse, IRegister } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http= inject(HttpClient);

  login(login :ILogin): Observable<ILoginResponse>{
    return this.http.post<ILoginResponse>('api/auth/login',login);
  }

  register(register: IRegister){
    return this.http.post<ILoginResponse>('api/auth/register',register);
  }
  constructor() { }
}
