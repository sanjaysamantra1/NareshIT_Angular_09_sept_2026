import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class Directives {
  num: number = 4;
  carArr = ['Tata', 'Honda', 'Maruti', 'Hyundai'];
  // employeeArr:any = [];
  employeeArr = [
        { id: 101, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
        { id: 102, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
        { id: 103, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
        { id: 104, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
  ];

  updateEmployeeArr(){
    this.employeeArr.push(
      { id: 105, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
      { id: 106, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
    )
  }
}
