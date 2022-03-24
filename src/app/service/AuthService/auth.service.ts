import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserData } from 'src/app/models/UserData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url: string = "http://localhost:8080/api";
  constructor(private http: HttpClient) { }

  registerUser(data: UserData){
    const url = this.base_url+"/register";
    return this.http.post(url, data);
  }

  loginUser(data: {email: string, password: string}): Observable<User>{
    const url = this.base_url+"/login";
    return this.http.post<User>(url, data);
  }
}
