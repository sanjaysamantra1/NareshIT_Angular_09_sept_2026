import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-productdetails',
  styleUrl: './productdetails.css',
  templateUrl: './productdetails.html',
})
export class Productdetails {
  product: any;
  activatedRoute = inject(ActivatedRoute);
  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.product = params;
      console.log(params);
    });
  }
}
