import { Component, OnInit } from '@angular/core';
import { Bids } from 'src/app/models/Bids';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-my-bids',
  templateUrl: './my-bids.component.html',
  styleUrls: ['./my-bids.component.css']
})
export class MyBidsComponent implements OnInit {

  bids: Bids[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if(user!=null){
      let userObj: User = JSON.parse(user);
      this.productService.fetchAllBidsByUid(userObj.uid!).subscribe({
        next: (data: Bids[]) => {
          this.bids = data;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log(this.bids);
        }
      })
    }
  }

}
