import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";

import { DataTableComponent } from "./components/data-table.component";
import { DialogRemoveComponent } from "./components/dialog-remove.component";
import { FilterPipe } from "./pipes/filter.pipe";

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
    DialogRemoveComponent
  ],
  declarations: [
    DataTableComponent,
    DialogRemoveComponent,

    FilterPipe
  ],
  exports: [
    DataTableComponent   
  ],
  providers: [
    
  ]
})
export class DataTableModule { }
