import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-bid-on-product',
  templateUrl: './bid-on-product.component.html',
  styleUrls: ['./bid-on-product.component.css']
})
export class BidOnProductComponent implements OnInit {
  @Input()
  product!: Product;
  amount: number = 0;

  lessThanBase: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.amount>=this.product.base_price!){
      this.lessThanBase = false;
      this.productService.bidOnProduct(""+this.product.pid, this.product.uid!, this.amount).subscribe(
        {
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log("bid successfull");
          }
        }
      );
    }
    else{
      this.lessThanBase = true;
    }
  }
}
