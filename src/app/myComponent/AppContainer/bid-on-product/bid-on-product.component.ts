import { Component, Input, OnInit } from '@angular/core';
import { Bids } from 'src/app/models/Bids';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-bid-on-product',
  templateUrl: './bid-on-product.component.html',
  styleUrls: ['./bid-on-product.component.css']
})
export class BidOnProductComponent implements OnInit {
  @Input()
  productId!: string;
  bids: Bids[] = [];
  user: User | null = null;

  constructor(private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    // console.log(this.productId);
    this.refreshBid();
    this.user = this.authService.user;
  }
  refreshBid(){
    this.productService.fetchAllBidsByPid(this.productId).subscribe((
      {
        next: (data) => {
          this.bids = data;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          // console.log(this.bids);
        }
      }
    ));
  }
}
