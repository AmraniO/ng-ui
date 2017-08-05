import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Nav, NavCategory } from "../models/nav.model";

@Component({
    selector: "nui-nav-menu",
    templateUrl: "nav-menu.component.html",
    styleUrls: ["nav-menu.component.scss"]
})
export class NavMenuComponent {
    @Input()
    navCategories: NavCategory[] = [];

    @Output()
    openNav: EventEmitter<Nav> = new EventEmitter<Nav>();

    constructor() {

    }

    onToggle(navCategory: NavCategory) {
        navCategory.open = !navCategory.open;
    }

    onOpenNav(nav: Nav) {        
        this.openNav.emit(nav);
    }
}