import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login-service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user_name: string;
  user_password: string;
  result: string;
  success: boolean;
  
  constructor(private loginService: LoginService){}

  ngOnInit() {

  }
    
  loginUser(name: string, password: string): void {
    console.log("Inside loginUser" + name +" " + password);

    if (!name || !password) {
      this.result = "Please fill username and password";
      this.success = false;
      return;
    }

    name = name.trim();
    this.success = this.loginService.loginService(name, password);

    if(this.success)
      this.result = "Success in logging in";
    else
      this.result = "Invalid username/password."
  }

}
