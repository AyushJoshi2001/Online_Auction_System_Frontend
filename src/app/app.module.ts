import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './myComponent/register/register.component';
import { LoginComponent } from './myComponent/login/login.component';
import { NavbarComponent } from './myComponent/navbar/navbar.component';
import { HomeComponent } from './myComponent/home/home.component';
import { ProductComponent } from './myComponent/product/product.component';
import { SingleProductComponent } from './myComponent/single-product/single-product.component';
import { AddProductComponent } from './myComponent/add-product/add-product.component';
import { FooterComponent } from './myComponent/footer/footer.component';
import { AboutComponent } from './myComponent/about/about.component';
import { AppContainerComponent } from './myComponent/app-container/app-container.component';
import { PageNotFoundComponent } from './myComponent/page-not-found/page-not-found.component';
import { AuthContainerComponent } from './myComponent/auth-container/auth-container.component';
import { SidenavComponent } from './myComponent/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/AuthService/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    SingleProductComponent,
    AddProductComponent,
    FooterComponent,
    AboutComponent,
    AppContainerComponent,
    PageNotFoundComponent,
    AuthContainerComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
