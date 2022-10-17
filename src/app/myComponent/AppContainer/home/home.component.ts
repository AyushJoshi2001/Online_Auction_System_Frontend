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
  searchBy: string = "title";
  pageNo: number = 1;
  pageSize: number = 2;
  totalProductCount: any = 0;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.pageNo = 1;
    this.searchQuery();
  }

  searchQuery(): void {
    this.loading = true;
    this.getTotalProductCount();
    if(this.searchBy=="title"){

      this.productService.getAllProducts(this.pageNo, this.pageSize, this.search, "", "").subscribe(
        {
        next: (res) => {
          // console.log(res.body);
          this.products=res.body!.products!;
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
      this.productService.getAllProducts(this.pageNo, this.pageSize, "", this.search, "").subscribe(
        {
        next: (res) => {
          // console.log(res.body);
          this.products=res.body!.products!
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
      this.productService.getAllProducts(this.pageNo, this.pageSize, "", "", this.search).subscribe(
        {
        next: (res) => {
          // console.log(res.body);
          this.products=res.body!.products!
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

  onClickPrev() {
    if(this.pageNo>1){
      this.pageNo--;
      this.searchQuery();
    }
  }

  onClickNext() {
    if((this.pageNo * this.pageSize)<this.totalProductCount) {
      this.pageNo++;
      this.searchQuery();
    }
  }

  // update count api like getAllProduct api.
  getTotalProductCount() {
    if(this.searchBy=="max_price") {
      this.productService.getTotalProductCountByMaxPrice(this.search).subscribe({
        next: (data) => {
          this.totalProductCount = data;
          console.log("count => ",this.totalProductCount);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    else if(this.searchBy=="pid") {
      this.totalProductCount = 1;
    }
    else {
      this.productService.getTotalProductCount().subscribe({
        next: (data) => {
          this.totalProductCount = data;
          console.log("count => ",this.totalProductCount);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  updateSearch() {
    this.pageNo = 1;
    this.search = '';
    this.searchQuery();
  }
}
