import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';

@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList {
  employeeService = inject(EmployeeService);
  employeeArr = this.employeeService.getAllEmployees();

  filterEmployees(selection: any) {
    console.log(selection);
    if (selection === 'Male') {
      this.employeeArr = this.employeeService.getMaleEmployees();
    } else if (selection === 'Female') {
      this.employeeArr = this.employeeService.getFemaleEmployees();
    } else {
      this.employeeArr = this.employeeService.getAllEmployees();
    }
  }
}
