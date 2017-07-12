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
    console.log(logindata);
    
    var postparam = {
      email: logindata.email,
      password: logindata.password
    }

    this.http.post(this.domain+'auth/login',logindata, {headers: this.headers}).subscribe((responce) => {
      
      
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
