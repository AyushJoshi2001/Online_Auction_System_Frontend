import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLoggedIn: boolean = false;
  user: string | null = null;
  userObject: User | null = null;

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(this.user==null){
      this.userLoggedIn = false;
    }
    else{
      this.userLoggedIn = true;
      this.userObject = JSON.parse(this.user);
      // console.log(this.userObject);
    }
  }

  logout(){
    localStorage.removeItem("user");
  }

}
