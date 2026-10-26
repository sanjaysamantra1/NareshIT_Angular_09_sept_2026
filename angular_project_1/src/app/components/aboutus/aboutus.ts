import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-aboutus',
  styleUrl: './aboutus.css',
  templateUrl: './aboutus.html',
})
export class Aboutus {
  router = inject(Router);
  location = inject(Location);

  doSomethingAndGoToHome() {
    console.log('Execute Some Logic.....');
    this.router.navigateByUrl('/home');
  }

  goToPreviousPage() {
    this.location.back();
  }
  goToNextPage() {
    this.location.forward();
  }
}
