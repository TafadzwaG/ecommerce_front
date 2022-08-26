import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideCategoriesComponent } from './aside-categories/aside-categories.component';
import { AsideColorsComponent } from './aside-colors/aside-colors.component';
import { AsideFeauturesComponent } from './aside-feautures/aside-feautures.component';
import { AsidePricesComponent } from './aside-prices/aside-prices.component';
import { AsideSizesComponent } from './aside-sizes/aside-sizes.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ToggleBeforeComponent } from './toggle-before/toggle-before.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    PaginationComponent,
    ToggleBeforeComponent,
    AsideCategoriesComponent,
    AsidePricesComponent,
    AsideColorsComponent,
    AsideSizesComponent,
    AsideFeauturesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    PaginationComponent,
    ToggleBeforeComponent,
    AsideCategoriesComponent,
    AsidePricesComponent,
    AsideColorsComponent,
    AsideSizesComponent,
    AsideFeauturesComponent,
  ],
  
})
export class ShopModule { }
