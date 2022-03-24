import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from 'src/app/models/UserData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  registerUser(data: UserData){
    const url = this.base_url+"/api/register";
    return this.http.post(url, data);
  }
}
