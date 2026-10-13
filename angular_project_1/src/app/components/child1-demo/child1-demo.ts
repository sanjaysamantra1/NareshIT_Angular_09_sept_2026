import { ChangeDetectorRef, Component, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-child1-demo',
  styleUrl: './child1-demo.css',
  templateUrl: './child1-demo.html',
  inputs: ['a', 'product'],
  outputs: ['courseEvent'],
})
export class Child1Demo {
  a: any;
  b: number = 20;
  courseName = 'Angular';
  product: any;
  @ViewChild('myInputBox') myInputBox: any;


  courseEvent = new EventEmitter();
  sendDataToParent() {
    this.courseEvent.emit(this.courseName);
  }

  constructor(private cdr: ChangeDetectorRef) { // Dependency Injection
    console.log('child constructor');
    console.log(this.myInputBox)
  }
  ngOnChanges(changes: any) {
    console.log('child ngOnChanges');
    console.log(changes);
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
    this.cdr.markForCheck();
  }
  ngAfterContentInit() {
    console.log('child ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('child ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
    console.log(this.myInputBox)
    this.myInputBox.nativeElement.focus();
    this.myInputBox.nativeElement.style.color = 'red'
  }
  ngAfterViewChecked() {
    console.log('child ngAfterViewChecked');
  }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
