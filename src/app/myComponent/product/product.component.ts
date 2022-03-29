import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: Product;

  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  clickedOnProduct(){
    this.router.navigateByUrl("/app/product/"+this.product.pid);
  }

}
