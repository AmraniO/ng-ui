import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";

import { DataTableComponent } from "./components";
import { ActionService, DialogService } from "../core/services";
import { FilterPipe } from "../core/pipes";
import { DialogBoxModule } from "../dialog-box";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,  
    MaterialModule,

    DialogBoxModule
  ],
  entryComponents: [
    
  ],
  declarations: [
    DataTableComponent,
    FilterPipe
  ],
  exports: [
    DataTableComponent   
  ],
  providers: [
    ActionService,
    DialogService
  ]
})
export class DataTableModule { }
