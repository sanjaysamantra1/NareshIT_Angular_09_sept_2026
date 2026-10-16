import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from '../models/employee';

@Service()
export class EmpService {
  httpClient = inject(HttpClient);

  // getAllEmps() { // fetching the response from backend and returs as it is to component
  //   return this.httpClient.get('http://localhost:3000/employees');
  // }

  getAllEmps(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees').pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map((responseObj: Employee) => new Employee(responseObj));
      }),
    );
  }
}
