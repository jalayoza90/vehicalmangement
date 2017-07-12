import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formdata = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    birthdate: '',
    perchase: '',
    pic: '',
    agree: '',
    block: '',
    mobile: 0
};
res;
error;
status;
  constructor(public userservice: UserService, public router: Router) { }

  ngOnInit() {
    var local = localStorage.getItem('logedin');
    if(local) {
      this.router.navigate(['dashboard']);
    }
  }

  submit(val) {
    console.log(val);
    if(val.password != val.confirmpassword) {
      this.error = 'Password Not match';
      this.status = 400;
      return false;
    }

    var self = this;
    this.userservice.signup(val, function(res){
      console.log(res);
      self.res = res;
      if(res.status == 200) {
        self.router.navigate(['login']);
      }

    });
  }

}
