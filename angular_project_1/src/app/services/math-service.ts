import { Service } from '@angular/core';

@Service()
export class MathService {
  sum(values: number[]): number {
    return values.reduce((total, ele) => total + ele, 0);
  }
  average(values: number[]): number {
    return values.length ? this.sum(values) / values.length : 0;
  }
  indexOfMax(values: number[]): number {
    const max = Math.max(...values);
    return values.indexOf(max);
  }
}
