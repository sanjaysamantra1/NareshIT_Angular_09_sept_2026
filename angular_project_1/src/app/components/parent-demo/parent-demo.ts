import { Component } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';

@Component({
  imports: [Child1Demo, Child2Demo],
  selector: 'app-parent-demo',
  styleUrl: './parent-demo.css',
  templateUrl: './parent-demo.html',
})
export class ParentDemo {
  a = 10;
  parentCourseName: string = '';

  receiveCourseData(courseName: string) {
    this.parentCourseName = courseName;
  }
}
