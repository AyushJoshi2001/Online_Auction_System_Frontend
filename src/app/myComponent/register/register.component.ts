import { Component, OnInit } from '@angular/core';
import {UserData} from "../../models/UserData";
import {AuthService} from "../../service/AuthService/auth.service";
import { Router } from "@angular/router";

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
      complete: () => {
        console.log("user successfully registered...");
        this.router.navigateByUrl("/app/home");
      }
    })
  }

}
