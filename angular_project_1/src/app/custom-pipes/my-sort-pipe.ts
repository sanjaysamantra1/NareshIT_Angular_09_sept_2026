import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
  pure: false,
})
export class MySortPipe implements PipeTransform {
  transform(arr: any[]) {
    return arr.sort((a, b) => a - b);
  }
}
