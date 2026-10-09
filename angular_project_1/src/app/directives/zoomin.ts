import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomin]',
})
export class Zoomin {
  constructor(private ele: ElementRef) {} // Dependency Injection
  // creating instance of ElementRef class
  // ele = new ElementRef();

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,110%)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)';
  }
}
