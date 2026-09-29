import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';

@Component({
  imports: [
    Navbar,
    Categories,
    Carousel,
    Body,
    Footer
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_project_1');
}
