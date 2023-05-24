import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly isLoggedIn = new BehaviorSubject<boolean>(false);

  isAuthenticated$(): Observable<boolean> {
    return this.isLoggedIn;
  }

  login() {
    this.isLoggedIn.next(true);
    console.log(this.isLoggedIn.value);
  }

  logout() {
    this.isLoggedIn.next(false);
    console.log(this.isLoggedIn.value);
  }

}