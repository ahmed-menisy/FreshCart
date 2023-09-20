import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    this.saveUser();
  }

  userData: BehaviorSubject<any> = new BehaviorSubject(null);

  saveUser(): void {
    const encoded = localStorage.getItem('_token');
    if (encoded) {
      try {
        const decoded: any = jwtDecode(encoded);
        decoded.name ? this.userData.next(decoded) : 'U';
      } catch (error: any) {
        if (error.message.includes('Invalid token')) {
          localStorage.removeItem('_token');
          this._Router.navigate(['/login']);
        }
      }
    }
  }

  setRegister(userData: Object): Observable<any> {
    return this._HttpClient.post(environment.baseUrlAuth + '/signup', userData);
  }

  setLogin(userData: Object): Observable<any> {
    return this._HttpClient.post(environment.baseUrlAuth + '/signin', userData);
  }

  setForgotPassword(emailUser: Object): Observable<any> {
    return this._HttpClient.post(
      environment.baseUrlAuth + '/forgotPasswords',
      emailUser
    );
  }

  setVerifyResetCode(emailUser: Object): Observable<any> {
    return this._HttpClient.post(
      environment.baseUrlAuth + '/verifyResetCode',
      emailUser
    );
  }

  resetPassword(userData: Object): Observable<any> {
    return this._HttpClient.put(
      environment.baseUrlAuth + '/resetPassword',
      userData
    );
  }

  setChangePassword(userPass: Object): Observable<any> {
    return this._HttpClient.put(
      environment.baseUrlUser + '/users/changeMyPassword',
      userPass
    );
  }
}
