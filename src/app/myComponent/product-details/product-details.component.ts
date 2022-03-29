import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
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

  lessThanBase: boolean = false;
  bidSuccess: boolean = false;
  ownerOfProduct: boolean = false;
  amount: number = 0;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get("pid");
    if(productId!=null){
      this.productService.getProductById(productId).subscribe((
        {
          next: (data) => {
            this.product = data;
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            let user = localStorage.getItem("user");
            if(user!=null){
              let userObj: User = JSON.parse(user);

              if(this.product.uid==userObj.uid){
                this.ownerOfProduct = true;
              }
              // console.log(this.ownerOfProduct);
            }
          }
        }
      ))
    }
  }



  onSubmit(){
    if(this.amount >= this.product.base_price!){
      this.lessThanBase = false;
      this.productService.bidOnProduct(""+this.product.pid, this.product.uid!, this.amount).subscribe(
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
