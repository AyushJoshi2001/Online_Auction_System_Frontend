import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/models/LoginDetails';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginDetails : LoginDetails = {
    email: "",
    password: ""
  }

  errorOccured: boolean = false;
  showPassword: string = "password";

  loggedInUser: User = {
    uid: null,
    name: "",
    email: "",
    password: "",
    profile_pic: "",
    mobile: "",
    address: "",
    about: "",
    isAdmin: null
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.user!=null){
      this.router.navigateByUrl("/app/home");
    }
  }

  onSubmit(){
    this.authService.loginUser(this.loginDetails).subscribe(
      {
        next: (res) => {
          this.errorOccured = false;
          this.loggedInUser = res.body!;
        },
        error: (err) => {
          if(err.status==401){
            this.errorOccured = true;
            console.log("error 401 occoured");
          }
        }
        ,
        complete: () => {
          localStorage.setItem("u_log", "12345");
          this.authService.user = this.loggedInUser;
          // console.log(this.authService.user);
          this.router.navigateByUrl("/app/home");
        }
      }
    )
  }

  showPasswordClick(){
    if(this.showPassword=="password"){
      this.showPassword = "text";
    }
    else{
      this.showPassword = "password";
    }
  }
}
