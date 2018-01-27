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
    return this.http.post('http://localhost:8080/users/register', user, {headers: headers})
      .map(res => {
        console.log(res.headers);
        return res.json();
      });
  }

  loginUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/login', user, {headers: headers});
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/users/profile', {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user) {
    this.authToken = token;
    this.user = user;
    localStorage.setItem('id_token', this.authToken);
    localStorage.setItem('user', JSON.stringify(this.user));
    console.log('saved');
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
    console.log(this.authToken);
    headers.append('Authorization', this.authToken);
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    return this.http.delete('http://localhost:8080/users/logout', {headers: headers})
      .map(res => res.json());
  }
}
