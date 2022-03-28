import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-with-operation',
  templateUrl: './product-with-operation.component.html',
  styleUrls: ['./product-with-operation.component.css']
})
export class ProductWithOperationComponent implements OnInit {
  @Input()
  product!: Product;
  user: string | null = null;
  loggedInUser: User | null = null;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  editProduct(){
    this.router.navigateByUrl("/app/editProduct/"+this.product.pid);
  }

  deleteProduct(){
    this.user  = localStorage.getItem("user");
    if(this.user){
      this.loggedInUser = JSON.parse(this.user);
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

}
