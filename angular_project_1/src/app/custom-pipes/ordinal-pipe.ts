import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ordinal',
  // pure: false   // impure
})
export class OrdinalPipe implements PipeTransform {
  transform(num:number) {
    console.log('OrdinalPipe called...')
    let rem = num%10;
    switch(rem){
      case 1: return `${num}st`
      case 2: return `${num}nd`
      case 3: return `${num}rd`
      default: return `${num}th`
    }
  }
}
