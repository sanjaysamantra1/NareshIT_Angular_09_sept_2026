import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]',
})
export class CharOnly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.value ?? '';
    const regex = /^[a-zA-Z]*$/;
    // let regex = new RegExp(/^[0-9]*$/);
    this.myBgColor = regex.test(value) ? 'lightgreen' : 'red';
  }
}
