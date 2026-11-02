import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchEmployees, deleteEmployee } from '../../actions/employee.actions';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-employee-crud',
  styleUrl: './employee-crud.css',
  templateUrl: './employee-crud.html',
})
export class EmployeeCrud {
  employees$: Observable<Employee[]> | undefined;

  constructor(private store: Store) {
    this.employees$ = this.store.select((state: any) => state.employeeData);
  }
  ngOnInit() {
    // this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
    this.store.dispatch(fetchEmployees());
  }
  deleteEmp(id: string) {
    const flag = confirm('Are you sure, You want to delete this record?');
    if (flag) {
      this.store.dispatch(deleteEmployee({ id }));
    }
  }
}
