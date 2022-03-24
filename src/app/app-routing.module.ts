import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './myComponent/about/about.component';
import { AppContainerComponent } from './myComponent/app-container/app-container.component';
import { AuthContainerComponent } from './myComponent/auth-container/auth-container.component';
import { HomeComponent } from './myComponent/home/home.component';
import { LoginComponent } from './myComponent/login/login.component';
import { PageNotFoundComponent } from './myComponent/page-not-found/page-not-found.component';
import { RegisterComponent } from './myComponent/register/register.component';

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
    ]
  },
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
