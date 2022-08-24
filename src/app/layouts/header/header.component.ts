import { selectUsername } from './../../ngrx-store/auth-store/auth.selectors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as  fromApp from '../../ngrx-store/app.reducer'
import * as AuthActions from '../../ngrx-store/auth-store/auth.actions'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAuthenticated = false;
  private userSubscription : Subscription;
  public userName: Observable<string> | 'User'
 


  constructor(
    private store: Store<fromApp.AppState>
  ) { 
    this.userSubscription = Subscription.EMPTY
    
  }

  ngOnInit(): void {
    this.userSubscription = this.store.select('auth')
    .pipe(map(authState => authState.user))
    .subscribe(user => {
      this.isAuthenticated = !!user

    })
    
    //Sunscription to cart
   

  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }


  onLogout(): void {
    this.store.dispatch(new AuthActions.Logout())
  }

}
