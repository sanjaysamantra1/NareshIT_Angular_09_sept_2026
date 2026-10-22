import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-subject-demo1',
  styleUrl: './subject-demo1.css',
  templateUrl: './subject-demo1.html',
})
export class SubjectDemo1 {
  ngOnInit() {
    // this.subject_demo();
    // this.behaviorSubject_demo();
    // this.replaySubject_demo();
    this.asyncSubject_demo();
  }
  subject_demo() {
    let planSubject = new Subject(); // observable(subject)
    planSubject.next('Plan-A');
    planSubject.subscribe((val) => console.log('Subscriber-1: ', val));
    planSubject.next('Plan-B');
    planSubject.subscribe((val) => console.log('Subscriber-2: ', val));
    planSubject.next('Plan-C');
  }

  behaviorSubject_demo() {
    let planSubject = new BehaviorSubject('Default Plan'); // observable(subject)
    planSubject.next('Plan-A');
    planSubject.subscribe((val) => console.log('Subscriber-1: ', val));
    planSubject.next('Plan-B');
    planSubject.subscribe((val) => console.log('Subscriber-2: ', val));
    planSubject.next('Plan-C');
  }

  replaySubject_demo() {
    let planSubject = new ReplaySubject(); // observable(subject)
    planSubject.next('Plan-A');
    planSubject.subscribe((val) => console.log('Subscriber-1: ', val));
    planSubject.next('Plan-B');
    planSubject.subscribe((val) => console.log('Subscriber-2: ', val));
    planSubject.next('Plan-C');
  }

  asyncSubject_demo() {
    let planSubject = new AsyncSubject(); // observable(subject)
    planSubject.next('Plan-A');
    planSubject.subscribe((val) => console.log('Subscriber-1: ', val));
    planSubject.next('Plan-B');
    planSubject.subscribe((val) => console.log('Subscriber-2: ', val));
    planSubject.next('Plan-C');
    planSubject.complete();
  }
}
