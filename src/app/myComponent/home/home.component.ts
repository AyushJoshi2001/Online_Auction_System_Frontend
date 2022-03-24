import { Component, OnInit } from '@angular/core';
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
  constructor(private productService: ProductService) {
    // this.showAllProducts;
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({next:
      (data: Product[]) => this.products=[...(data as any).products],
      error: (error) => console.log(error),
      complete: () => {
        if(this.products && this.products.length>0){
          this.avail = true;
        }
      }
    });
  }

  onClick = () => {

  }

  showAllProducts(): void {
  }
}
