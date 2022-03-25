import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {
  user: string | null = null;

  constructor() { }

  ngOnInit(): void {
      this.user = localStorage.getItem("user");

    if(this.user){
      console.log("App-Container Component: ", JSON.parse(this.user));
    }
  }

}
