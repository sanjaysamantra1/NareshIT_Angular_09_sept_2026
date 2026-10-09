import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablePaste]',
})
export class DisablePaste {
  @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  onCopyOrPatse(event: any) {
    console.log('event ', event.type);
    alert(`${event.type} is not allowed here`)
    event.preventDefault();
  }
}
