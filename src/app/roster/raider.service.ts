import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IRaider } from './raider';
import { Injectable } from '@angular/core';

@Injectable()
export class RaiderService {
    private _raiderUrl = './api/raiders.json';

    constructor(private _http: HttpClient) { }

    getRaiders(): Observable<IRaider[]> {
        return this._http.get<IRaider[]>(this._raiderUrl).catch(this.handleError);
    }

    getRaider(id: number): Observable<IRaider> {
        return this.getRaiders().map((raiders: IRaider[]) => raiders.find(r => r.id === id));
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}