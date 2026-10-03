import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-databinding',
  styleUrl: './databinding.css',
  templateUrl: './databinding.html',
})
export class Databinding {
  courseName: string = 'Angular';
  img_url: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rUHJT-BCkQ2y8FfSL9ZZJ0YAXZOP2FndwZpt7y7-Nw&s=10';
  flag: boolean = true;
  max_chars: number = 20;

  toggleFlag() {
    this.flag = !this.flag;
  }

  user = { firstName: 'Virat', lastName: 'Kohli' };

  num1: number = 1;
  num2: number = 2;

  addResult: number = 0;
  addition(value1: string, value2: string) {
    this.addResult = Number(value1) + Number(value2);
  }
}
