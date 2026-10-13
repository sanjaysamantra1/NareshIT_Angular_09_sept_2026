import { Component } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Child1Demo, Child2Demo, FormsModule],
  selector: 'app-parent-demo',
  styleUrl: './parent-demo.css',
  templateUrl: './parent-demo.html',
})
export class ParentDemo {
  a: number;
  parentCourseName: string = '';
  product = {
    name: 'HP Probook Laptop',
    price: 40000,
    quantity: 1,
  };

  receiveCourseData(courseName: string) {
    this.parentCourseName = courseName;
  }

  constructor() {
    console.log('Parent constructor');
    this.a = 10;
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
