import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const RefreshUSER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public getToken2(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
   public getUserrefresh() {
    return JSON.parse(sessionStorage.getItem(RefreshUSER_KEY));
  }
  public getAllUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
}
}
