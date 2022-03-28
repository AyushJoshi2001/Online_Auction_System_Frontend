import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAddDetails } from 'src/app/models/Basic';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  // productEditDetails: ProductAddDetails = {
  //   title: ""
  // };
  product: Product = {
    title: "",
    product_pic: "",
    description: "",
    bid_status: "",
    // created_at?: number;
    // uid?: number;
    sold_status: "",
    // sold_to?: number;
  };

  pid: string | null = null;

  fillDetails: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.pid = this.activatedRoute.snapshot.paramMap.get("pid");
    if(this.pid!= null && this.pid.length>0){
      this.productService.getProductById(this.pid).subscribe((
        {
          next: (data: Product) => {
            this.product = data;
          },
          error: (err) => {
            console.log("Error occoured while fetching product", err);
          },
          complete: () => {
            // console.log(this.product);
          }
        }
      ))
    }
  }

  onSubmit(){
    if(this.product.title.length > 0){
      // console.log(this.product);
      this.fillDetails = true;
      this.productService.editProduct(this.product).subscribe(
        {
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.router.navigateByUrl("/app/myProduct");
          }
        }
      )
    }
    else{
      this.fillDetails = false;
    }
  }

}
