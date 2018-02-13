import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  authToken: any;
  user: any;

  constructor(private http: Http) {
    this.loadToken();
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers})
      .map(res => {
        return res.json();
      });
  }

  loginUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/login', user, {headers: headers});
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user) {
    this.authToken = token;
    this.user = user;
    localStorage.setItem('id_token', this.authToken);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  logout() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    return this.http.delete('users/logout', {headers: headers})
      .map(res => res.json());
  }
}
