import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  avail: boolean = false;
  search: string = "";
  loading: boolean = true;
  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        // console.log(res);
        // console.log(res.body!.products);
        this.loading = true;
        this.products=[...res.body!.products!];
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
      }
    )
  }
}
