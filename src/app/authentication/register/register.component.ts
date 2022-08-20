import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,

} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx-store/app.reducer'
import * as AuthActions from '../../ngrx-store/auth-store/auth.actions'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  onSubmitRegister(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const name = form.value.name
    const email = form.value.email
    const password = form.value.password
    const password_confirmation = form.value.password_confirmation

    this.store.dispatch(new AuthActions.SignupStart({
      name,
      email,
      password,
      password_confirmation
    }))
    // form.reset();
  }


}
