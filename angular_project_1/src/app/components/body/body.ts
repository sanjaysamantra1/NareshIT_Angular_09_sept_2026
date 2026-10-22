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
import { UserList } from '../user-list/user-list';
import { EmpList } from '../emp-list/emp-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';

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
    // EmployeeList
    // UserList
    // EmpList
    // ObservableDemo1
    // ObservableDemo2
    // ObservableDemo3
    SubjectDemo1
  ],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class Body {
  isLoggedIn: Boolean = false;
}
