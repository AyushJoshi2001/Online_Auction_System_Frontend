import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './myComponent/register/register.component';
import { LoginComponent } from './myComponent/login/login.component';
import { NavbarComponent } from './myComponent/navbar/navbar.component';
import { HomeComponent } from './myComponent/home/home.component';
import { ProductComponent } from './myComponent/product/product.component';
import { AddProductComponent } from './myComponent/add-product/add-product.component';
import { FooterComponent } from './myComponent/footer/footer.component';
import { AboutComponent } from './myComponent/about/about.component';
import { AppContainerComponent } from './myComponent/app-container/app-container.component';
import { PageNotFoundComponent } from './myComponent/page-not-found/page-not-found.component';
import { AuthContainerComponent } from './myComponent/auth-container/auth-container.component';
import { SidenavComponent } from './myComponent/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/AuthService/auth.service';
import { EditProductComponent } from './myComponent/edit-product/edit-product.component';
import { MyProductComponent } from './myComponent/my-product/my-product.component';
import { ProductWithOperationComponent } from './myComponent/product-with-operation/product-with-operation.component';
import { ProfileComponent } from './myComponent/profile/profile.component';
import { ProductDetailsComponent } from './myComponent/product-details/product-details.component';
import { BidOnProductComponent } from './myComponent/bid-on-product/bid-on-product.component';
import { MyBidsComponent } from './myComponent/my-bids/my-bids.component';
import { MyWinComponent } from './myComponent/my-win/my-win.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AdminLoginComponent } from './myComponent/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './myComponent/admin/admin-home/admin-home.component';
import { CookieService } from 'ngx-cookie-service';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    AddProductComponent,
    FooterComponent,
    AboutComponent,
    AppContainerComponent,
    PageNotFoundComponent,
    AuthContainerComponent,
    SidenavComponent,
    EditProductComponent,
    MyProductComponent,
    ProductWithOperationComponent,
    ProfileComponent,
    ProductDetailsComponent,
    BidOnProductComponent,
    MyBidsComponent,
    MyWinComponent,
    AdminLoginComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
