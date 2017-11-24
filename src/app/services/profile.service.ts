import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { Profile } from '../model/profile';

@Injectable()
export class ProfileService {

    private baseURL = 'http://169.254.165.44:8081/jsp-servlet-mvc-restclient';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) {
    }

    getProfile(userId: string): Promise<Profile> {
        const url = 'UserProfileServlet';
        const getProfileApiURL = `${this.baseURL}/${url}`;
        //const body = JSON.stringify(userId);
        
        return this.http
        .post(getProfileApiURL, userId)
        .toPromise()
        .then((res: Response) => res.json() as Profile)
        .catch();
    }

}