import { Component, inject } from '@angular/core';
import { EmpService } from '../../services/emp-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-emp-list',
  styleUrl: './emp-list.css',
  templateUrl: './emp-list.html',
})
export class EmpList {
  empService = inject(EmpService);
  empData: Observable<any> | undefined;

  ngOnInit() {
    this.empData = this.empService.getAllEmps();

    this.empService.getAllEmps().subscribe(response=>{
      console.log(response)
    })
  }
}
