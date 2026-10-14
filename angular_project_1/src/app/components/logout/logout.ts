import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-logout',
  styleUrl: './logout.css',
  templateUrl: './logout.html',
})
export class Logout {
  ngOnInit(){
      console.log('Logout component loaded...')
    }
    ngOnDestroy(){
      console.log('Logout component deleted...')
    }
}
