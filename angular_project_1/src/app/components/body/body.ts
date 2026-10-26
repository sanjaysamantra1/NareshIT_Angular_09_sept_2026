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
import { TodoList } from '../todo-list/todo-list';
import { TodoAdd } from '../todo-add/todo-add';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateForm } from '../template-form/template-form';
import { ModelForm } from '../model-form/model-form';
import { SignalForm } from '../signal-form/signal-form';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { RouterOutlet } from '@angular/router';

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
    // SubjectDemo1
    // TodoList,
    // TodoAdd,
    // SignalDemo1
    // SignalDemo2
    // FormDemo1
    // TemplateForm
    // ModelForm,
    // SignalForm
    // DynamicForm,
    RouterOutlet
],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class Body {
  isLoggedIn: Boolean = false;
}
