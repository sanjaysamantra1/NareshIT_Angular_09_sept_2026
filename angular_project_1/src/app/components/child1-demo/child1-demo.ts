import { Component, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child1-demo',
  styleUrl: './child1-demo.css',
  templateUrl: './child1-demo.html',
  inputs: ['a'],
  outputs:['courseEvent']
})
export class Child1Demo {
  a: any;
  b: number = 20;
  courseName = 'Angular';

  courseEvent = new EventEmitter();
  sendDataToParent() {
    this.courseEvent.emit(this.courseName);
  }
}
