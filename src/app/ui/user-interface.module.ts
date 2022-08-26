import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountBreadCrumbComponent } from './account-bread-crumb/account-bread-crumb.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { CtaContainerComponent } from './cta-container/cta-container.component';
import { FilterMiniComponent } from './filter-mini/filter-mini.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import { NavCategoriesComponent } from './nav-categories/nav-categories.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { ShareLinksComponent } from './share-links/share-links.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CtaContainerComponent,
    ImageCardComponent,
    SpinnerComponent ,
    AccountBreadCrumbComponent,
    ShareLinksComponent,
    BreadCrumbComponent,
    FilterMiniComponent,
    PriceFilterComponent,
    NavCategoriesComponent,
    MiniCartComponent,
  ],
  exports: [
    CtaContainerComponent,
    ImageCardComponent,
    SpinnerComponent, 
    AccountBreadCrumbComponent,
    ShareLinksComponent,
    BreadCrumbComponent,
    FilterMiniComponent,
    PriceFilterComponent,
    NavCategoriesComponent,
    MiniCartComponent,
  ],

  imports: [
    CommonModule,
    RouterModule, 
    FormsModule,
  ]
})
export class UserInterfaceModule { }
