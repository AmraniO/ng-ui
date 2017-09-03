import { Component, Inject } from "@angular/core";
import { MdDialogRef } from "@angular/material";
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: "nui-dialog-box",
    templateUrl: "./dialog-box.component.html",
    styleUrls: ["./dialog-box.component.scss"]
})
export class DialogBoxComponent {
    constructor(public dialogRef: MdDialogRef<DialogBoxComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }
}