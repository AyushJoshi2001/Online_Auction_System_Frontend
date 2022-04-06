import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './myComponent/AppContainer/about/about.component';
import { AddProductComponent } from './myComponent/AppContainer/add-product/add-product.component';
import { AdminHomeComponent } from './myComponent/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './myComponent/admin/admin-login/admin-login.component';
import { AppContainerComponent } from './myComponent/AppContainer/app-container/app-container.component';
import { AuthContainerComponent } from './myComponent/AuthContainer/auth-container/auth-container.component';
import { EditProductComponent } from './myComponent/AppContainer/edit-product/edit-product.component';
import { HomeComponent } from './myComponent/AppContainer/home/home.component';
import { LoginComponent } from './myComponent/AuthContainer/login/login.component';
import { MyBidsComponent } from './myComponent/AppContainer/my-bids/my-bids.component';
import { MyProductComponent } from './myComponent/AppContainer/my-product/my-product.component';
import { MyWinComponent } from './myComponent/AppContainer/my-win/my-win.component';
import { PageNotFoundComponent } from './myComponent/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './myComponent/AppContainer/product-details/product-details.component';
import { ProfileComponent } from './myComponent/AppContainer/profile/profile.component';
import { RegisterComponent } from './myComponent/AuthContainer/register/register.component';

const routes: Routes = [
  {path: "", redirectTo:"/app", pathMatch:"full"},
  {path:"auth", component: AuthContainerComponent,
    children: [
      {path:"", component: LoginComponent},
      {path:"login", component:LoginComponent},
      {path:"register", component:RegisterComponent},
    ]
  },
  {path: "app", component: AppContainerComponent,
   children: [
      {path:"", component:HomeComponent},
      {path:"home", component:HomeComponent},
      {path:"about", component:AboutComponent},
      {path:"addProduct", component:AddProductComponent},
      {path:"myProduct", component:MyProductComponent},
      {path:"editProduct/:pid", component:EditProductComponent},
      {path:"profile", component:ProfileComponent},
      {path:"product/:pid", component:ProductDetailsComponent},
      {path:"myBid", component:MyBidsComponent},
      {path:"myWin", component:MyWinComponent},
    ]
  },
  {path: "admin", component: AuthContainerComponent,
    children: [
      {path: "", redirectTo:"/admin/login", pathMatch: "full"},
      {path: "login", component:AdminLoginComponent},
      {path: "login", component:AdminHomeComponent},
    ]
  },
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
