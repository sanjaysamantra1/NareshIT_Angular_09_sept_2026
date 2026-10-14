import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styles: ``,
  template: ` <p>login works!</p> `,
})
export class Login {
  myTimer: number;
  constructor() {
    this.myTimer = setInterval(() => {
      console.log('I am setinterval from login component...');
    }, 1000);
  }
  ngOnInit() {
    console.log('Login component loaded...');
  }
  ngOnDestroy() {
    console.log('Login component deleted...');
    clearInterval(this.myTimer);
  }
}
