import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor(public userservice: UserService) { }

  ngOnInit() {
  }

  submit(val) {
    //val
    var self = this;
    this.userservice.login(val, function(res){
      console.log(res);
      self.data = res;
    });
    
  }

}
