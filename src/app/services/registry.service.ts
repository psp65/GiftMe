import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Registry } from '../model/registry';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegistryService {
    private baseUrl = 'https://169.254.165.44:8443/jsp-servlet-mvc-restclient';

    constructor(private http: HttpClient) { }

    createRegistry(regis: Registry): Observable<Registry> {

        const registryServlet = 'CreateRegistryServlet';
        const url = `${this.baseUrl}/${registryServlet}`;

        return this.http.post<Registry>(url, regis).pipe(
            tap(_ => console.log(`fetched registry id=${regis.userId}`)),
            catchError(this.handleError<Registry>(`getRegi id=${regis.userId}`))
        );


    }

    addUsersToRegistry(regis: Registry): Observable<Registry> {

        const addUsersServlet = 'AddUserToSharedRegistryServlet';
        const url = `${this.baseUrl}/${addUsersServlet}`;

        return this.http.post<Registry>(url, regis).pipe(
            tap(_ => console.log(`Item added succesfully.`)),
            catchError(this.handleError<Registry>(`Error in adding items.`))
        );

    }

    addItemsToRegistry(regis: Registry): Observable<Registry> {

        const addUsersServlet = 'AddItemRegistryServlet';
        const url = `${this.baseUrl}/${addUsersServlet}`;

        return this.http.post<Registry>(url, regis).pipe(
            tap(_ => console.log(`Item added in registry`)),
            catchError(this.handleError<Registry>(`Error in adding item to registry`))
        );

    }


    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

}