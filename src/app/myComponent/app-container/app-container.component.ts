import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.user==null){
      this.router.navigateByUrl("/auth/login");
    }
      // this.authService.me().subscribe({
      //   next: (res) => {
      //     this.authService.user = res.body;
      //   },
      //   error: (err) => {
      //     // console.log(err);
      //     if(err.status==403){
      //       this.router.navigateByUrl("/auth/login");
      //     }
      //   },
      //   complete: () => {
      //     // console.log(this.user);

      //   }
      // })
  }

}
