import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(num: number): string {
    if (isNaN(num) || num % 1 !== 0) return '';

    const val = num % 100;
    switch (true) {
      case val > 10 && val < 14:
        return num + 'th';
      case num % 10 === 1:
        return num + 'st';
      case num % 10 === 2:
        return num + 'nd';
      case num % 10 === 3:
        return num + 'rd';
      default:
        return num + 'th';
    }
  }
}
