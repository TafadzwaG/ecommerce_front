import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../ngrx-store/app.reducer'
import * as AuthActions from '../../ngrx-store/auth-store/auth.actions'
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoading: boolean = false
  public error: string = ''
  private storeSubscription: Subscription

  constructor(
    private store: Store<fromApp.AppState>
  ) { 
    this.storeSubscription = Subscription.EMPTY
  }

  ngOnInit(): void {
    this.storeSubscription = this.store.select('auth').subscribe(
      authState => {
        this.isLoading = authState.loading
        this.error = authState.authError
        if (this.error) {
          alert(this.error)
        }
      }
    )
  }

  onSubmitLogin(form: NgForm): void{

    const email = form.value.email
    const password = form.value.password

    if(!form.valid){
      return
    }

    this.store.dispatch(new AuthActions.LoginStart({
      email,
      password
    }))

  }

}
