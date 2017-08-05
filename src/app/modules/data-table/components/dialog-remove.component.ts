import { Component } from "@angular/core";
import { MdDialogRef } from '@angular/material';

@Component({
    selector: "nui-dialog-remove",
    templateUrl: "./dialog-remove.component.html"
})
export class DialogRemoveComponent {
    constructor(public dialogRef: MdDialogRef<DialogRemoveComponent>) {}
}