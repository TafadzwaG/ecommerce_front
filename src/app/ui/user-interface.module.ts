import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountBreadCrumbComponent } from './account-bread-crumb/account-bread-crumb.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { CtaContainerComponent } from './cta-container/cta-container.component';
import { FilterMiniComponent } from './filter-mini/filter-mini.component';
import { NavCategoriesComponent } from './nav-categories/nav-categories.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { ShareLinksComponent } from './share-links/share-links.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CtaContainerComponent,
    SpinnerComponent ,
    AccountBreadCrumbComponent,
    ShareLinksComponent,
    BreadCrumbComponent,
    FilterMiniComponent,
    PriceFilterComponent,
    NavCategoriesComponent,
  ],
  exports: [
    CtaContainerComponent,
    SpinnerComponent, 
    AccountBreadCrumbComponent,
    ShareLinksComponent,
    BreadCrumbComponent,
    FilterMiniComponent,
    PriceFilterComponent,
    NavCategoriesComponent,
  ],

  imports: [
    CommonModule,
    RouterModule, 
    FormsModule,
  ]
})
export class UserInterfaceModule { }
