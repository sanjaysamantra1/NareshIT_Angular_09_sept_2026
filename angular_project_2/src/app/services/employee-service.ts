import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class EmployeeService {
  httpClient = inject(HttpClient);

  fetchAllEmployees() {
    return this.httpClient.get('http://localhost:3000/employees');
  }
  deleteEmployee(id: string) {
    return this.httpClient.delete(`http://localhost:3000/employees/${id}`);
  }
  addEmployee(newEmp: any) {
    return this.httpClient.post('http://localhost:3000/employees', newEmp);
  }
}
