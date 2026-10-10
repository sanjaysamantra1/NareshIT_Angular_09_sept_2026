import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';

@Component({
  imports: [CommonModule,FormsModule,OrdinalPipe],
  selector: 'app-pipes-demo',
  styleUrl: './pipes-demo.css',
  templateUrl: './pipes-demo.html',
})
export class PipesDemo {
  customerName: string = 'Virat koHLi';
  salary: number = 5000;

  dateObj = new Date();
  user = { name: 'Sanjay', role: 'Trainer', address: 'Bangalore' };

  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota', 'Mahindra'];

  num: number = 21;
}
