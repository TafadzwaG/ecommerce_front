import { LayoutModule } from './layouts/layout.module';
import { CartModule } from './pages/cart/cart.module';
import { ShopModule } from './pages/shop/shop.module';
import { CartEffects } from './ngrx-store/cart-store/cart.effects';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CartComponent } from './pages/cart/cart.component';
import { BlogsComponent } from './pages/blogs/blogs.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import * as fromApp from './ngrx-store/app.reducer'
import { AuthEffects } from './ngrx-store/auth-store/auth.effects';
import  { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductDetailStComponent } from './skeletons/product-detail-st/product-detail-st.component';
import { UserInterfaceModule } from './ui/user-interface.module';
import { SharedComponentsModule } from './components/shared-components.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    DashboardComponent,
    CartComponent,
    BlogsComponent,

    ProductDetailComponent,
    ShopComponent,
    
    ProductDetailStComponent,
  
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    CartModule,
    UserInterfaceModule,
    ShopModule,
    AppRoutingModule,
    FormsModule,
    SharedComponentsModule,
    HttpClientModule,
    CarouselModule,
    LayoutModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects, CartEffects]),
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
