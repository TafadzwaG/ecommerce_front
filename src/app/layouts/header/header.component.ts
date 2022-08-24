import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromApp from '../../ngrx-store/app.reducer';
import * as AuthActions from '../../ngrx-store/auth-store/auth.actions';
import { selectUsername } from '../../ngrx-store/auth-store/auth.selectors'
import * as CartActions from '../../ngrx-store/cart-store/cart.actions'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isAuthenticated = false;
  private userSubscription: Subscription;
  public userName$ : Observable<string>;


  constructor(private store: Store<fromApp.AppState>) {
    this.userSubscription = Subscription.EMPTY;
    this.userName$ = this.store.pipe(select(selectUsername))
  }

  ngOnInit(): void {
    this.userSubscription = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
      });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onLogout(): void {
    this.store.dispatch(new AuthActions.Logout());
    this.store.dispatch(new CartActions.ClearCart())
  }
}
