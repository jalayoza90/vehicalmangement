import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata: any = {
    email: '',
    password: '',
  };
  data;
  constructor(public userservice: UserService,  public router: Router) { }

  ngOnInit() {
    var local = localStorage.getItem('logedin');
    if(local) {
      this.router.navigate(['dashboard']);
    }
  }

  submit(val) {
    //val
    var self = this;
    this.userservice.login(val, function(res){
      console.log(res);
      self.data = res;
      if(res.status == 200) {
        self.router.navigate(['dashboard']);
      }
    });
    
  }

}
