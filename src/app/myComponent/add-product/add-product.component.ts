import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAddDetails } from 'src/app/models/Basic';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productAddDetails: ProductAddDetails = {
    title: ""
  };

  user: string | null = null;
  userLoggedIn: User | null = null;
  fillDetails: boolean = true;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.user= localStorage.getItem("user");
    if(this.user == null){
      this.router.navigateByUrl("/auth/login");
    }
    else{
      this.userLoggedIn = JSON.parse(this.user);
    }
  }


  onSubmit(){
    if(this.productAddDetails.title.length > 0 && this.productAddDetails.description!.length > 0){
      this.fillDetails = true;
      if(this.userLoggedIn && this.userLoggedIn.uid != null){
        this.productAddDetails.uid = this.userLoggedIn.uid;

        this.productService.addProduct(this.productAddDetails).subscribe({
          error: (err) => console.log(err),
          complete: () => {
            this.router.navigateByUrl("/app/home");
          }
        })
      }
    }
    else{
      this.fillDetails = false;
    }

    // console.log(this.productAddDetails);
  }

}
