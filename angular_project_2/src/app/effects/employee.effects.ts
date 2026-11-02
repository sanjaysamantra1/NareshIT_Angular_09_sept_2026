import { inject, Injectable, Service } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { EmployeeService } from '../services/employee-service';
import { addEmployee, deleteEmployee, fetchEmployees } from '../actions/employee.actions';

@Service()
export class EmployeeEffects {
  loadEmployees$: any;
  deleteEmployee$: any;
  addEmployee$: any;
  actions$ = inject(Actions);
  employeeService = inject(EmployeeService);
  constructor() {
    this.loadEmployees$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fetchEmployees),
        exhaustMap(() =>
          this.employeeService.fetchAllEmployees().pipe(
            map((Employees) => ({
              type: '[Employees API] Employees Loaded Successfully',
              payload: Employees,
            })),
            catchError(() => of({ type: '[Employees API] Employees Loaded Error' })),
          ),
        ),
      ),
    );
    this.deleteEmployee$ = createEffect(() =>
      this.actions$.pipe(
        ofType(deleteEmployee),
        exhaustMap((action: any) =>
          this.employeeService.deleteEmployee(action.id).pipe(
            map((Employee) => {
              alert('Employee Deleted Succesfully');
              return { type: '[EmployeeList Page] Fetch Employees' };
            }),
            catchError(() => of({ type: '[Employees API] Employee Delete Error' })),
          ),
        ),
      ),
    );
    this.addEmployee$ = createEffect(() =>
      this.actions$.pipe(
        ofType(addEmployee),
        exhaustMap((action: any) =>
          this.employeeService.addEmployee(action.employee).pipe(
            map((Employee) => {
              alert('Employee Added Succesfully');
              return { type: '[EmployeeList Page] Fetch Employees' };
            }),
            catchError(() => of({ type: '[Employees API] Employee Add Error' })),
          ),
        ),
      ),
    );
  }
}
