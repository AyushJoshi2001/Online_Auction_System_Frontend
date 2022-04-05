import { Component, OnInit } from '@angular/core';
import { Bids } from 'src/app/models/Bids';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/AuthService/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-my-win',
  templateUrl: './my-win.component.html',
  styleUrls: ['./my-win.component.css']
})
export class MyWinComponent implements OnInit {

  userObj: User | null = null;

  products: Product[] = [];
  constructor(private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userObj = this.authService.user;
    if(this.userObj!=null){
      this.productService.fetchProductsBySoldTo(""+this.userObj.uid).subscribe((
        {
          next: (data: Product[]) => {
            this.products = data;
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            // console.log(this.products);
          }

        }
      ))
    }
  }

}
