import { ProductList } from './../product-list/product-list';
import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { PipesDemo } from '../pipes-demo/pipes-demo';

@Component({
  imports: [
    // Databinding,
    // Directives,
    // ProductList,
    // MyModal
    PipesDemo
  ],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class Body {}


