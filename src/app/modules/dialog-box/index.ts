import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "@angular/material";

import { DialogBoxComponent } from "./components";
import { DialogService } from "./services/dialog.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    DialogBoxComponent    
  ],
  declarations: [
    DialogBoxComponent    
  ],
  exports: [
    DialogBoxComponent       
  ],
  providers: [
    DialogService
  ]
})
export class DialogBoxModule { }
