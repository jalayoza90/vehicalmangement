import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  domain = 'http://111.93.82.91:3000/';
  headers;
  constructor(private http: Http) { 
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  public login(logindata, callback) {
 
    this.http.post(this.domain+'auth/login',logindata, {headers: this.headers}).subscribe((responce) => {
      
      
      var resObject = responce.json();
      resObject.status = 200;
      localStorage.setItem('logedin',JSON.stringify(resObject));
      callback(resObject);
    }, (err) => {
      var jsonParse = JSON.parse(err._body);
      jsonParse.status = 400;
      callback(jsonParse);
    });
  }

  signup(regdata, callback) {
    console.log(regdata);
    
    this.http.post(this.domain+'auth/login',regdata, {headers: this.headers}).subscribe((responce) => {
      
      
      var resObject = responce.json();
      resObject.status = 200;
      callback(resObject);
    }, (err) => {
      var jsonParse = JSON.parse(err._body);
      jsonParse.status = 400;
      callback(jsonParse);
    });
  }

}
