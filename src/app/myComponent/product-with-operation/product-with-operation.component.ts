import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-with-operation',
  templateUrl: './product-with-operation.component.html',
  styleUrls: ['./product-with-operation.component.css']
})
export class ProductWithOperationComponent implements OnInit {
  @Input()
  product!: Product;
  loggedInUser: User | null = null;
  bidClosed: boolean = false;

  constructor(private productService: ProductService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.user;
    if(this.product.bid_status==="Close"){
      this.bidClosed = true;
    }
    else{
      this.bidClosed = false;
    }
  }

  editProduct(){
    this.router.navigateByUrl("/app/editProduct/"+this.product.pid);
  }

  deleteProduct(){
    if(this.loggedInUser){
      if(this.loggedInUser && this.loggedInUser.uid){
        this.productService.deleteProduct(this.product.pid!, this.loggedInUser.uid).subscribe(
          {
            next: (data) => {
              // console.log(data);
            },
            error: (err) => console.log(err),
            complete: () => {
              this.router.navigateByUrl("/app/home");
            }
          }
        )
      }
    }
  }

  closeBid(){
    console.log(this.loggedInUser);
    if(this.loggedInUser){
      if(this.loggedInUser && this.loggedInUser.uid){
        this.productService.closeBid(""+this.product.pid!, this.loggedInUser.uid).subscribe(
          {
            next: (data) => {
              console.log(data);
            },
            error: (err) => console.log(err),
            complete: () => {
              this.router.navigateByUrl("/app/home");
            }
          }
        )
      }
    }
  }
}
