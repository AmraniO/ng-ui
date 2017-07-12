import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Nav, NavCategory } from "./nav.model";

@Component({
    selector: "nui-nav-menu",
    templateUrl: "nav-menu.component.html",
    styleUrls: ["nav-menu.component.scss"]
})
export class NavMenuComponent implements OnInit {
/*
    navsOp: Nav[] = [
        {
            name: "dashboard",
            label: "Dashboard",
            component: null
        },     
        {
            name: "customer",
            label: "Customer",
            component: "operation/customer"
        },
        {
            name: "supplier",
            label: "Supplier",
            component: null
        },
        {
            name: "invoice",
            label: "Invoice",
            component: "operation/invoice"
        },
        {
            name: "order",
            label: "Order",
            component: "operation/order"
        }
    ]

    navsAdmin: Nav[] = [
        {
            name: "vat",
            label: "VAT",
            component: null
        }        
    ]

    navsConfig: Nav[] = [
        {
            name: "user",
            label: "User",
            component: "configuration/user"
        }        
    ]
*/
/*
    navCategories: NavCategory[] = [
        { name: "operation", label: "Operation", icon: "apps", navs: this.navsOp, open: true },
        { name: "administration", label: "Administration", icon: "view_list", navs: this.navsAdmin, open: false },
        { name: "configuration", label: "Configuration", icon: "settings", navs: this.navsConfig, open: false }
    ]
*/

    @Input()
    navCategories: NavCategory[] = [];

    @Output()
    openNav: EventEmitter<Nav> = new EventEmitter<Nav>();

    constructor() {

    }

    ngOnInit() {

    }

    onToggle(navCategory: NavCategory) {
        navCategory.open = !navCategory.open;
    }

    onOpenNav(nav: Nav) {        
        this.openNav.emit(nav);
    }
}