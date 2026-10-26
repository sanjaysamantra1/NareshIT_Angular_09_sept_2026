import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {}
