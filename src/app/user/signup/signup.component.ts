import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor() { }

  ngOnInit() {
  }

  submit(val) {
    console.log(val);
    if(val.password != val.confirmpassword) {
      this.res.error = 'Password Not match';
      this.res.status = 400;
    }
  }

}
