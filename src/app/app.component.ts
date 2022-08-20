import { Component , OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './ngrx-store/app.reducer'
import * as AuthActions from './ngrx-store/auth-store/auth.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  constructor(
    private store: Store<fromApp.AppState>,
  ){}

  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin())
  }
}
