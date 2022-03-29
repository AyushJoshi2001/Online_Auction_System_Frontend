import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/UserService/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User ={
    name: ""
  };
  edit: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let userString = localStorage.getItem("user");
    if(userString){
      this.user = JSON.parse(userString);
    }
  }

  editClick() {
    this.edit = true;
    // console.log(this.edit);
  }

  saveClick() {
    // console.log(this.edit);
    this.userService.updateUser(this.user).subscribe(
      {
        next: (data: User) => {
          this.user = {...data};
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log(this.user);
          this.edit = false;
          localStorage.setItem("user", JSON.stringify(this.user));
        }
      }
    )
  }

}
