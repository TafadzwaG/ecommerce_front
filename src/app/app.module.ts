import { ShopModule } from './pages/shop/shop.module';
import { CartEffects } from './ngrx-store/cart-store/cart.effects';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MiniCartComponent } from './ui/mini-cart/mini-cart.component';
import { CartComponent } from './pages/cart/cart.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { TopNavigationComponent } from './layouts/header/top-navigation/top-navigation.component';
import { HomeBarSectionComponent } from './layouts/home/home-bar-section/home-bar-section.component';
import { SlideBarSectionComponent } from './layouts/home/slide-bar-section/slide-bar-section.component';
import { WidgetSideBarComponent } from './layouts/home/widget-side-bar/widget-side-bar.component';
import { HomeAdsComponent } from './layouts/home/home-ads/home-ads.component';
import { FeaturedProductsComponent } from './layouts/home/featured-products/featured-products.component';
import { BrandsComponent } from './layouts/home/brands/brands.component';
import { FilterProductsComponent } from './layouts/home/filter-products/filter-products.component';
import { SupportComponent } from './layouts/home/support/support.component';
import { CtaSmallComponent } from './layouts/home/cta-small/cta-small.component';
import { CtaContainerComponent } from './ui/cta-container/cta-container.component';
import { SideBarLinkComponent } from './layouts/home/widget-side-bar/side-bar-link/side-bar-link.component';
import { SubMenuComponent } from './layouts/home/widget-side-bar/sub-menu/sub-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdsContainerComponent } from './layouts/home/home-ads/ads-container/ads-container.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { HomeBlogCardComponent } from './components/home-blog-card/home-blog-card.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { TestimonialComponent } from './layouts/home/testimonial/testimonial.component';
import { BlogSectionComponent } from './layouts/home/blog-section/blog-section.component';
import { SaleSectionComponent } from './layouts/home/sale-section/sale-section.component';
import { SaleCardComponent } from './components/sale-card/sale-card.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopBannerCardComponent } from './components/shop-banner-card/shop-banner-card.component';
import { NavCategoriesComponent } from './ui/nav-categories/nav-categories.component';
import { PriceFilterComponent } from './ui/price-filter/price-filter.component';
import { FilterMiniComponent } from './ui/filter-mini/filter-mini.component';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import { BreadCrumbComponent } from './ui/bread-crumb/bread-crumb.component';
import { SideBarRightComponent } from './components/side-bar-right/side-bar-right.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ProductComponent } from './components/product/product.component';
import { ShareLinksComponent } from './ui/share-links/share-links.component';
import { ColorSizeComponent } from './components/product/color-size/color-size.component';
import { AccountBreadCrumbComponent } from './ui/account-bread-crumb/account-bread-crumb.component';
import { SpinnerComponent } from './ui/spinner/spinner.component'
import * as fromApp from './ngrx-store/app.reducer'
import { AuthEffects } from './ngrx-store/auth-store/auth.effects';
import  { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductDetailStComponent } from './skeletons/product-detail-st/product-detail-st.component';
import { CartItemCardComponent } from './pages/cart/cart-item-card/cart-item-card.component';
import { CartItemsComponent } from './pages/cart/cart-items/cart-items.component';
import { CartTotalCardComponent } from './pages/cart/cart-total-card/cart-total-card.component';
import { EmptyCartComponent } from './pages/cart/empty-cart/empty-cart.component';
import { CartBreadCrumbComponent } from './pages/cart/cart-bread-crumb/cart-bread-crumb.component';
import { ActionsComponent } from './pages/cart/actions/actions.component';
import { ImageCardComponent } from './ui/image-card/image-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    DashboardComponent,
    MiniCartComponent,
    CartComponent,
    BlogsComponent,
    TopNavigationComponent,
    HomeBarSectionComponent,
    SlideBarSectionComponent,
    WidgetSideBarComponent,
    HomeAdsComponent,
    FeaturedProductsComponent,
    BrandsComponent,
    FilterProductsComponent,
    SupportComponent,
    CtaSmallComponent,
    CtaContainerComponent,
    SideBarLinkComponent,
    SubMenuComponent,
    AdsContainerComponent,
    FeaturedCardComponent,
    MiniCardComponent,
    HomeBlogCardComponent,
    TestimonialCardComponent,
    TestimonialComponent,
    BlogSectionComponent,
    SaleSectionComponent,
    SaleCardComponent,
    ProductDetailComponent,
    ShopComponent,
    ShopBannerCardComponent,
    NavCategoriesComponent,
    PriceFilterComponent,
    FilterMiniComponent,
    BreadCrumbComponent,
    SideBarRightComponent,
    TabContainerComponent,
    ReviewFormComponent,
    ReviewCardComponent,
    ProductComponent,
    ShareLinksComponent,
    ColorSizeComponent,
    AccountBreadCrumbComponent,
    SpinnerComponent,
    ProductDetailStComponent,
    CartItemCardComponent,
    CartItemsComponent,
    CartTotalCardComponent,
    EmptyCartComponent,
    CartBreadCrumbComponent,
    ActionsComponent,
    ImageCardComponent,
    
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    ShopModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
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
