import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {
  products: Product[] = [];
  avail: boolean = false;
  search: string = "";
  loading: boolean = true;

  userLoggedIn: User | null = null;

  constructor(private productService: ProductService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userLoggedIn = this.authService.user;
    this.searchQuery();
    // if(this.user == null){
    //   this.router.navigateByUrl("/auth/login");
    // }
    // else{
    //   this.userLoggedIn = JSON.parse(this.user);
    //   this.searchQuery();
    // }
  }


  searchQuery(): void {
    this.search = this.search;
    if(this.userLoggedIn && this.userLoggedIn.uid){
      // console.log(this.search+"/"+this.userLoggedIn.uid);
      this.productService.getByTitleAndId(this.search, this.userLoggedIn.uid).subscribe(
        {
          next: (data: Product[]) => {
            this.loading = true;
            this.products = data;
          },
          complete: () => {
            this.loading = false;
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
