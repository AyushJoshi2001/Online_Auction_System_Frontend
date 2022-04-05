import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/models/Basic';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url: string = "http://localhost:8080/api";
  user : User | null = null;

  constructor(private http: HttpClient) { }

  registerUser(data: UserData){
    const url = this.base_url+"/register";
    return this.http.post(url, data, {withCredentials: true});
  }

  loginUser(data: {email: string, password: string}): Observable<HttpResponse<User>>{
    const url = this.base_url+"/login";
    return this.http.post<User>(url, data, {observe: "response", withCredentials: true});
  }

  logoutUser(){
    const url = this.base_url+"/logout";
    return this.http.get(url, {withCredentials: true});
  }


  me(): Observable<HttpResponse<User>>{
    const url = this.base_url+"/me";
    return this.http.get<User>(url, {observe: "response", withCredentials: true});
  }
}
