import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';

@Component({
  imports: [
    Databinding
  ],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {}
