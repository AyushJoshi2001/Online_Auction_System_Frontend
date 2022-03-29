import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base_url: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  updateUser(userData: User): Observable<User>{
    const url = this.base_url+"/updateUser";
    return this.http.put<User>(url, userData);
  }

}
