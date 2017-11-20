import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

    temp1 = "psp65";
    temp2 = "hello";

    loginService(name: string, password: string): boolean {
        console.log("Inside loginService()");

        if(name == this.temp1 && password == this.temp2)
            return true;

        return false;
    }
    
    private handleError(error: any) {
        console.log("we are in error");
        return Promise.reject(error.message);
    }

}
