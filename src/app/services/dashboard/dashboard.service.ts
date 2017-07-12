import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DashboardService {
  domain = 'http://111.93.82.91:3000/';
  headers;
  constructor(private http: Http) { 
    var loc = JSON.parse(localStorage.getItem('logedin'));
    
    this.headers = new Headers({'Content-Type': 'application/json', 'Authorization': loc.token});
    
  }
  listall(callback) {
    this.http.get(this.domain+'vehicle/list-all', {headers: this.headers}).subscribe((responce) => {
      
      
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
