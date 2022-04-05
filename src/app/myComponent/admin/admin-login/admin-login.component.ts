import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/models/LoginDetails';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

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
    about: "",
    isAdmin: null
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      this.router.navigateByUrl("/admin/home");
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
        // console.log(this.loggedInUser);
        localStorage.setItem("user", JSON.stringify(this.loggedInUser));
        this.router.navigateByUrl("/admin/home");
      }
    }
    )
  }
}
