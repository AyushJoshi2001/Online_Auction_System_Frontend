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
  searchBy: string = "title";

  userLoggedIn: User | null = null;

  constructor(private productService: ProductService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userLoggedIn = this.authService.user;
    this.getProductsByUid();
  }

  getProductsByUid = () => {
    this.productService.getByUid(this.userLoggedIn?.uid!).subscribe({
      next: (res) => {
        // console.log(res.body);
        // console.log(res.body!.products);
        this.loading = true;
        this.products = res.body!;
      },
      error: (err) => {
        this.loading = false;
        console.log(err);
        if(err.status==403){
          this.router.navigateByUrl("/auth/login");
        }
      },
      complete: () => {
        this.loading = false;
        if(this.products && this.products.length>0){
          this.avail = true;
        }
      }
    });
  }

  searchQuery(): void {
    this.search = this.search;
    if(this.searchBy=="title"){

      this.productService.getByTitle(this.search).subscribe(
        {
        next: (res) => {
          // console.log(res.body);
          this.products = res.body!;
        },
        complete: () => {
          if(this.products.length==0){
            this.avail = false;
          }
          else {
            this.avail = true;
          }
        }
      })
    }
    else if(this.searchBy=="max_price"){
      this.productService.getByMaxPrice(this.search).subscribe(
        {
        next: (res) => {
          // console.log(res.body);
          this.products = res.body!;
        },
        complete: () => {
          if(this.products.length==0){
            this.avail = false;
          }
          else {
            this.avail = true;
          }
        }
      })
    }
    else{
      this.productService.getById(this.search).subscribe(
        {
        next: (res) => {
          // console.log(res.body);
          this.products = res.body!;
        },
        complete: () => {
          if(this.products.length==0){
            this.avail = false;
          }
          else {
            this.avail = true;
          }
        }
      })
    }
  }
}
