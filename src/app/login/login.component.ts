import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LoginRequest } from '../model/loginRequest';
import { LoginResponse } from '../model/loginResponse';
import { SignUpRequest } from '../model/signupRequest';
import { SignUpResponse } from '../model/signupResponse';

import { LoginService } from '../services/login-service';
import { UserIdService } from '../services/userId.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  @Input() loginReq: LoginRequest;
  @Input() signupReq: SignUpRequest;

  loginRes: LoginResponse;
  signupRes: SignUpResponse;
  show: boolean;

  constructor(
    private loginService: LoginService,
    private userIdService: UserIdService,
    private router: Router) {}

  ngOnInit() {
      this.loginReq = new LoginRequest();
      this.loginRes = new LoginResponse();
      this.signupReq = new SignUpRequest();
      this.signupRes = new SignUpResponse();
      
      this.userIdService.setUserId(null);
      this.userIdService.setUserName(null);
  }


  loginUser() {
    
    if (!this.loginReq["email"] || !this.loginReq["password"]) {
      this.loginRes["message"] = "Please fill username and password";
      this.loginRes["success"] = false;
      return;
    }

    this.loginService.loginService(this.loginReq).then(res => {
        this.loginRes = res;
        
        if (this.loginRes["success"]) {
          this.userIdService.setUserId(this.loginRes["userId"]);
          this.userIdService.setUserName(this.loginRes["name"]);
          this.router.navigate(['/dashboard']);
        } 
    });

  }

  signUpUser(type: string ): void {

    if(type == "0"){
      if (!this.signupReq["email"] || !this.signupReq["password"] || !this.signupReq["name"] || 
          this.signupReq["!address"] || !this.signupReq["phone"]) {
            this.signupRes["message"] = "Please fill username and password";
            this.signupRes["success"] = false;
            return;
      }
    }

    this.signupReq["type"] = type;

    this.loginService.signupService(this.signupReq).then(res => {
      this.signupRes = res;

      if (this.signupRes["success"]) {
        this.signupReq["email"] = "";
        this.signupReq["name"] = "";
        this.signupReq["password"] = "";
        this.signupReq["address"] = "";
        this.signupReq["phone"] = "";
      } 
  
    });

  }

}
