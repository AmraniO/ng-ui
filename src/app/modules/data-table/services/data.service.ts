import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
    constructor(public http: HttpClient) { }

    getPanel(): Observable<any> {
        return this.http.get("http://localhost:51203/api/panels/1");
    }

    getData(): Observable<any> {
        return this.http.get("http://localhost:51203/api/customers");
    }
}