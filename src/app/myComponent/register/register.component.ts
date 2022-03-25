import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/AuthService/auth.service";
import { Router } from "@angular/router";
import { UserData } from 'src/app/models/Basic';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: UserData = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    userType: "Buyer"
  };

  errorOccured: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      this.router.navigateByUrl("/app/home");
    }
  }

  onSubmit(){
    this.userData = {
      name: this.userData?.name,
      email: this.userData?.email,
      password: this.userData?.password,
      mobile: this.userData?.mobile,
      address: this.userData?.address,
      userType: this.userData?.userType
    }

    this.authService.registerUser(this.userData).subscribe({
      next: () => {
        this.errorOccured = false;
      },
      error: (err) => {
        if(err.status == 400){
          this.errorOccured = true;
          console.log("error 400 occoured");
        }
      },
      complete: () => {
        console.log("user successfully registered...");
        this.router.navigateByUrl("/auth/login");
      }
    })
  }

}
