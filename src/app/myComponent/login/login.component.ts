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

  loggedInUser: User = {
    uid: null,
    name: "",
    email: "",
    password: "",
    profile_pic: "",
    mobile: "",
    address: "",
    userType: "",
    isAdmin: null
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      this.router.navigateByUrl("/app/home");
    }
  }

  onSubmit(){
    this.authService.loginUser(this.loginDetails).subscribe(
      {
        next: (data: User) => {
          this.errorOccured = false;
          this.loggedInUser = data;
        },
        error: (err) => {
          if(err.status==401){
            this.errorOccured = true;
            console.log("error 401 occoured");
          }
        }
        ,
        complete: () => {
          // console.log(this.loggedInUser);
          localStorage.setItem("user", JSON.stringify(this.loggedInUser));
          this.router.navigateByUrl("/app/home");
        }
      }
    )
  }

}
