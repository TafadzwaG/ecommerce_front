import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { HomeBlogCardComponent } from './home-blog-card/home-blog-card.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { ColorSizeComponent } from './product/color-size/color-size.component';
import { ProductComponent } from './product/product.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { SaleCardComponent } from './sale-card/sale-card.component';
import { ShopBannerCardComponent } from './shop-banner-card/shop-banner-card.component';
import { SideBarRightComponent } from './side-bar-right/side-bar-right.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { UserInterfaceModule } from '../ui/user-interface.module';



@NgModule({
  declarations: [
    FeaturedCardComponent,
    MiniCardComponent,
    HomeBlogCardComponent,
    SaleCardComponent,
    ShopBannerCardComponent,
    SideBarRightComponent,
    TabContainerComponent,
    ReviewFormComponent,
    ReviewCardComponent,
    ProductComponent,
    ColorSizeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserInterfaceModule,
  ],
  exports:[
    FeaturedCardComponent,
    MiniCardComponent,
    HomeBlogCardComponent,
    SaleCardComponent,
    ShopBannerCardComponent,
    SideBarRightComponent,
    TabContainerComponent,
    ReviewFormComponent,
    ReviewCardComponent,
    ProductComponent,
    ColorSizeComponent,
  ]
})
export class SharedComponentsModule { }
