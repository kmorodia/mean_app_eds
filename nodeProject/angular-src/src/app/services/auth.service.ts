import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  helper = new JwtHelperService();
  table:Object;
  
  constructor(
    private http:HttpClient
    ) { }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/authenticate', user, {headers: headers});
  }

  getEmployeeTable(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers=headers.append('Content-Type', 'application/json');
    if(this.authToken != null){
      headers=headers.append('Authorization', this.authToken);
    }
    //console.log(headers);
    return this.http.get('http://localhost:3000/employees', {headers: headers});
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    this.loadToken();
    return !(this.helper.isTokenExpired(this.authToken));
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  storeTable(eTable){
    localStorage.setItem('table', JSON.stringify(eTable));
    this.table = eTable;
    //console.log(this.table);
  }

  loadTable(){
    const token = JSON.parse(localStorage.getItem('table'));
    this.table = token;
  }

}
