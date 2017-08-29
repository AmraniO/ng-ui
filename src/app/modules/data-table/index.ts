import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";

import { DataTableComponent } from "./components/data-table.component";
import { DialogRemoveComponent } from "./components/dialog-remove.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { DataService } from "./services/data.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,  
    MaterialModule
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
    DataService
  ]
})
export class DataTableModule { }
