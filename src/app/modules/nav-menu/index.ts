import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import "hammerjs";

import { NavMenuComponent } from "./components/nav-menu.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [
        NavMenuComponent
    ],
    exports: [
        NavMenuComponent
    ]
})
export class NavMenuModule { }