import { CartModule } from './../pages/cart/cart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopNavigationComponent } from './header/top-navigation/top-navigation.component';
import { BlogSectionComponent } from './home/blog-section/blog-section.component';
import { BrandsComponent } from './home/brands/brands.component';
import { CtaSmallComponent } from './home/cta-small/cta-small.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { FilterProductsComponent } from './home/filter-products/filter-products.component';
import { AdsContainerComponent } from './home/home-ads/ads-container/ads-container.component';
import { HomeAdsComponent } from './home/home-ads/home-ads.component';
import { HomeBarSectionComponent } from './home/home-bar-section/home-bar-section.component';
import { SaleSectionComponent } from './home/sale-section/sale-section.component';
import { SlideBarSectionComponent } from './home/slide-bar-section/slide-bar-section.component';
import { SupportComponent } from './home/support/support.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { SideBarLinkComponent } from './home/widget-side-bar/side-bar-link/side-bar-link.component';
import { SubMenuComponent } from './home/widget-side-bar/sub-menu/sub-menu.component';
import { WidgetSideBarComponent } from './home/widget-side-bar/widget-side-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TestimonialCardComponent } from './cards/testimonial-card/testimonial-card.component';
import { SharedComponentsModule } from '../components/shared-components.module';
import { UserInterfaceModule } from '../ui/user-interface.module';




@NgModule({
  declarations: [
    SaleSectionComponent,
    BlogSectionComponent,
    TestimonialComponent,
    AdsContainerComponent,
    TopNavigationComponent,
    HomeBarSectionComponent,
    SlideBarSectionComponent,
    WidgetSideBarComponent,
    HomeAdsComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeAdsComponent,
    FeaturedProductsComponent,
    BrandsComponent,
    FilterProductsComponent,
    SupportComponent,
    CtaSmallComponent,
    SideBarLinkComponent,
    SubMenuComponent,
    TestimonialCardComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedComponentsModule,
    UserInterfaceModule,
    CartModule
  ],
  exports: [
    SaleSectionComponent,
    BlogSectionComponent,
    TestimonialComponent,
    AdsContainerComponent,
    TopNavigationComponent,
    HomeBarSectionComponent,
    SlideBarSectionComponent,
    WidgetSideBarComponent,
    HomeAdsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FeaturedProductsComponent,
    BrandsComponent,
    FilterProductsComponent,
    SupportComponent,
    CtaSmallComponent,
    SideBarLinkComponent,
    TestimonialCardComponent,
    SubMenuComponent,
  ]
})
export class LayoutModule { }
