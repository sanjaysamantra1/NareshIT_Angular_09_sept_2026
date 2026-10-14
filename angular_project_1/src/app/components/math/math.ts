import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  imports: [],
  selector: 'app-math',
  styleUrl: './math.css',
  templateUrl: './math.html',
})
export class Math {
  mathService = inject(MathService);

  ngOnInit() {
    console.log(this.mathService.sum([10, 20, 30, 40, 50]));
  }
}
