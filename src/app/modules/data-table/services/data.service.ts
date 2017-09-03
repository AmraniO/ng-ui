import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
    constructor(public http: HttpClient) { }

    API_URI: string;

    getPanel(key: number): Observable<any> {
        return this.http.get(`${this.API_URI}api/panels/${key}`);
    }

    getData(entity: string): Observable<any> {
        return this.http.get(`${this.API_URI}api/${entity}`);
    }

    remove(key: number): Observable<any> {
        return this.http.delete(`${this.API_URI}api/customers/${key}`);
    }
}