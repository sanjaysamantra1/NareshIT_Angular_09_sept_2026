import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { MySortPipe } from '../../custom-pipes/my-sort-pipe';

@Component({
  imports: [CommonModule, FormsModule, OrdinalPipe,MySortPipe],
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

  numArr = [20, 50, 10, 30, 40];
}
