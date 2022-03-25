import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  products: Product[] = [];
  avail: boolean = false;
  search: string = "";

  user: string | null = null;
  userLoggedIn: User | null = null;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.user= localStorage.getItem("user");
    if(this.user == null){
      this.router.navigateByUrl("/auth/login");
    }
    else{
      this.userLoggedIn = JSON.parse(this.user);
      this.searchQuery();
    }
  }

  searchQuery(): void {
    this.search = this.search;
    if(this.userLoggedIn && this.userLoggedIn.uid){
      // console.log(this.search+"/"+this.userLoggedIn.uid);
      this.productService.getByTitleAndId(this.search, this.userLoggedIn.uid).subscribe(
        {
          next: (data: Product[]) => {
            this.products = data;
          },
          complete: () => {
            if(this.products.length==0){
              this.avail = false;
            }
            else {
              this.avail = true;
            }
          }
        }
      )
    }
  }
}
