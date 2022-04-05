import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  userLoggedIn: boolean= false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.user){
      this.userLoggedIn = true;
    }
    else{
      this.userLoggedIn = false;
    }
  }

}
