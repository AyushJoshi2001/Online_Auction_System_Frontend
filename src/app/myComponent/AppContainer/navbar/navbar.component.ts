import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLoggedIn: boolean = false;
  user: User | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    // console.log(this.authService.user);
    if(this.user==null){
      this.userLoggedIn = false;
    }
    else{
      this.userLoggedIn = true;
    }
  }

  logout(){
    this.authService.logoutUser().subscribe({
      next: (data) => {
        // console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        localStorage.removeItem("u_log");
        console.log("logout completed...");
        window.location.href = "/auth/login";
      }
    });
  }

}
