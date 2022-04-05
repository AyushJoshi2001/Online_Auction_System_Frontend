import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bids } from 'src/app/models/Bids';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-my-bids',
  templateUrl: './my-bids.component.html',
  styleUrls: ['./my-bids.component.css']
})
export class MyBidsComponent implements OnInit {

  bids: Bids[] = [];

  constructor(private productService: ProductService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    let user = this.authService.user;
    if(user!=null){
      this.productService.fetchAllBidsByUid(user.uid!).subscribe({
        next: (data: Bids[]) => {
          this.bids = data;
        },
        error: (err) => {
          console.log(err);
          if(err.status==403){
            this.router.navigateByUrl("/auth/login");
          }
        },
        complete: () => {
          // console.log(this.bids);
        }
      })
    }
  }

}
