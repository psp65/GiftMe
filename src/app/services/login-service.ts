import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { LoginRequest } from '../model/loginRequest';
import { LoginResponse } from '../model/loginResponse';
import { SignUpRequest } from '../model/signupRequest';
import { SignUpResponse } from '../model/signupResponse';

@Injectable()
export class LoginService {

    private baseURL = 'http://169.254.165.44:8081/jsp-servlet-mvc-restclient';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    loginService(loginReq: LoginRequest): Promise<LoginResponse> {
        const url = 'SessionControllerServlet';
        
        const loginApiURL = `${this.baseURL}/${url}`;
        const body = JSON.stringify(loginReq);
        return this.http
        .post(loginApiURL, body, {headers: this.headers})
        .toPromise()
        .then((res: Response) => res.json() as LoginResponse)
        .catch();
    }

    signupService(signupReq: SignUpRequest): Promise<SignUpResponse> {
        const url = 'SignupServlet';
       
        const signupApiURL = `${this.baseURL}/${url}`;
        const body = JSON.stringify(signupReq);

        return this.http
        .post(signupApiURL, body, {headers: this.headers})
        .toPromise()
        .then((res: Response) => res.json() as SignUpResponse)
        .catch();
    }

}
