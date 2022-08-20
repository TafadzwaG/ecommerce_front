import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }



  public getUserToken(): string {
    const userData = JSON.parse(localStorage.getItem('userData')!);
    return userData._token
  }
}
