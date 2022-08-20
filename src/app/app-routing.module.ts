import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { LoginComponent } from './authentication/login/login.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path : 'about',
    component: AboutComponent,
  },
  {
    path : 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'product_detail/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
