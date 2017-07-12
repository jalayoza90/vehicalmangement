import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import { Routes, RouterModule } from '@angular/router';

import { UserService } from './services/user/user.service';

const appRouters: Routes = [
  { path : '', component: LoginComponent },
  
  { path : 'login', component: LoginComponent },
  { path : 'signup', component: SignupComponent },
  { path : 'forgot', component: ForgotComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
