import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navsOp = [
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

  navsAdmin = [
      {
          name: "vat",
          label: "VAT",
          component: null
      }        
  ]

  navsConfig = [
      {
          name: "user",
          label: "User",
          component: "configuration/user"
      }        
  ]

  navCategories = [
        { name: "operation", label: "Operation", icon: "apps", navs: this.navsOp, open: true },
        { name: "administration", label: "Administration", icon: "view_list", navs: this.navsAdmin, open: false },
        { name: "configuration", label: "Configuration", icon: "settings", navs: this.navsConfig, open: false }
    ]
}
