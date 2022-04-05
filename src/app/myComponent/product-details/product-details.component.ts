import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    title: "",
  };

  loggedInUser: User | null = null;

  productId: string = "";

  lessThanBase: boolean = false;
  bidSuccess: boolean = false;
  ownerOfProduct: boolean = false;
  sold: boolean = false;
  amount: number = 0;
  constructor(private productService: ProductService, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get("pid") || "";
    let user = this.authService.user;
    if(user!=null){
      this.loggedInUser = user;
    }
    if(this.productId!=null){
      this.productService.getProductById(this.productId).subscribe((
        {
          next: (data) => {
            this.product = data;
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {


              if(this.product.uid==this.loggedInUser!.uid){
                this.ownerOfProduct = true;
              }
              // console.log(this.ownerOfProduct);

            if(this.product.sold_status=="Sold"){
              this.sold = true;
            }
            else{
              this.sold = false;
            }
          }
        }
      ))
    }
  }



  onSubmit(){
    if(this.amount >= this.product.base_price!){
      this.lessThanBase = false;
      this.productService.bidOnProduct(""+this.product.pid, this.loggedInUser!.uid!, this.amount, this.product.title).subscribe(
        {
          error: (err) => {
            this.bidSuccess = false;
            console.log(err);
          },
          complete: () => {
            this.bidSuccess = true;
            // console.log("bid successfull");
          }
        }
      );
    }
    else{
      this.lessThanBase = true;
    }
  }
}
