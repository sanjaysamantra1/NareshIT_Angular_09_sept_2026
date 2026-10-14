import { ProductList } from './../product-list/product-list';
import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Login } from '../login/login';
import { Logout } from '../logout/logout';
import { Math } from '../math/math';
import { EmployeeList } from '../employee-list/employee-list';

@Component({
  imports: [
    // Databinding,
    // Directives,
    // ProductList,
    // MyModal
    // PipesDemo
    // ParentDemo,
    // Login,
    // Logout
    // Math
    EmployeeList
  ],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class Body {
  isLoggedIn: Boolean = false;
}
