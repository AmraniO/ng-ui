import { Injectable } from "@angular/core";
import { MdDialog } from "@angular/material";
import { Observable } from "rxjs/observable";

import { DialogBoxComponent } from "../components";

@Injectable()
export class DialogService {
    constructor(public dialog: MdDialog) { }

    openDialog(data: any): Observable<any> {
        return this.dialog
            .open(DialogBoxComponent, data)
            .afterClosed();            
    }
}