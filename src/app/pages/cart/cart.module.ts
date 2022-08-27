import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthEffects } from 'src/app/ngrx-store/auth-store/auth.effects';
import { CartEffects } from 'src/app/ngrx-store/cart-store/cart.effects';
import * as fromApp from '../../ngrx-store/app.reducer';
import { ActionsComponent } from './actions/actions.component';
import { CartBreadCrumbComponent } from './cart-bread-crumb/cart-bread-crumb.component';
import { CartItemCardComponent } from './cart-item-card/cart-item-card.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartTotalCardComponent } from './cart-total-card/cart-total-card.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCardComponent } from 'src/app/pages/cart/image-card/image-card.component';
import { RouterModule } from '@angular/router';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CartItemCardComponent,
    CartItemsComponent,
    CartTotalCardComponent,
    EmptyCartComponent,
    CartBreadCrumbComponent,
    ActionsComponent,
    ImageCardComponent,
    MiniCartComponent,
  ],
  exports: [
    CartItemCardComponent,
    CartItemsComponent,
    CartTotalCardComponent,
    EmptyCartComponent,
    CartBreadCrumbComponent,
    ActionsComponent,
    ImageCardComponent,
    MiniCartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects, CartEffects]),
    StoreModule.forRoot(fromApp.appReducer),
  ],
})
export class CartModule {}
