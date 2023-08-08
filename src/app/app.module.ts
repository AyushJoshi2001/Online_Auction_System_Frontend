import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './myComponent/AppContainer/navbar/navbar.component';
import { HomeComponent } from './myComponent/AppContainer/home/home.component';
import { ProductComponent } from './myComponent/AppContainer/product/product.component';
import { AddProductComponent } from './myComponent/AppContainer/add-product/add-product.component';
import { FooterComponent } from './myComponent/AppContainer/footer/footer.component';
import { AboutComponent } from './myComponent/AppContainer/about/about.component';
import { AppContainerComponent } from './myComponent/AppContainer/app-container/app-container.component';
import { PageNotFoundComponent } from './myComponent/page-not-found/page-not-found.component';
import { AuthContainerComponent } from './myComponent/AuthContainer/auth-container/auth-container.component';
import { SidenavComponent } from './myComponent/AppContainer/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/AuthService/auth.service';
import { EditProductComponent } from './myComponent/AppContainer/edit-product/edit-product.component';
import { MyProductComponent } from './myComponent/AppContainer/my-product/my-product.component';
import { ProductWithOperationComponent } from './myComponent/AppContainer/product-with-operation/product-with-operation.component';
import { ProfileComponent } from './myComponent/AppContainer/profile/profile.component';
import { ProductDetailsComponent } from './myComponent/AppContainer/product-details/product-details.component';
import { BidOnProductComponent } from './myComponent/AppContainer/bid-on-product/bid-on-product.component';
import { MyBidsComponent } from './myComponent/AppContainer/my-bids/my-bids.component';
import { MyWinComponent } from './myComponent/AppContainer/my-win/my-win.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AdminLoginComponent } from './myComponent/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './myComponent/admin/admin-home/admin-home.component';
import { CookieService } from 'ngx-cookie-service';
import { RegisterComponent } from './myComponent/AuthContainer/register/register.component';
import { LoginComponent } from './myComponent/AuthContainer/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

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
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
