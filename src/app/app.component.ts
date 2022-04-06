import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './service/AuthService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'online-auction-system';
  loading: boolean = true;

  constructor(private authService: AuthService, private router: Router){
  }

  ngOnInit(): void {
    if(localStorage.getItem("u_log")!=null){
      this.authService.me().subscribe({
        next: (res) => {
          this.loading = true;
          this.authService.user = res.body;
          // console.log(authService.user);

        },
        error: (err) => {
          // console.log(err);
          this.loading = false;
          if(err.status==403){

            this.router.navigateByUrl("/auth/login");
          }
        },
        complete: () => {
          this.loading = false;
          // console.log(this.user);

        }
      })
    }
    else{
      this.loading = false;
    }
  }
}
