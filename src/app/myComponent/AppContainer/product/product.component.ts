import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;
  bidClosed: boolean = false;
  hover: boolean = false;
  timeLeft: any = 0;
  loggedInUser: User | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loggedInUser = this.authService.user;
    if (this.product.bid_status === 'Close') {
      this.bidClosed = true;
    } else {
      this.bidClosed = false;
    }

    let endDateTime: any = new Date(this.product.bid_end_date!);

    this.timeLeft = Math.round(
      (endDateTime.valueOf() - Date.now()) / (1000 * 60)
    );
    if (this.timeLeft < 0) {
      this.timeLeft = 0;
    }
  }

  clickedOnProduct() {
    this.router.navigateByUrl('/app/product/' + this.product.pid);
  }
}
