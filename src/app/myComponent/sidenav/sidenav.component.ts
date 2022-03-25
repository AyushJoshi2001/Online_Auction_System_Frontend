import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  userLoggedIn: boolean= false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      this.userLoggedIn = true;
    }
    else{
      this.userLoggedIn = false;
    }
  }

}
