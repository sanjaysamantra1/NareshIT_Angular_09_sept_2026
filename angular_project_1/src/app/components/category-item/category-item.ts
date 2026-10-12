import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-category-item',
  styleUrl: './category-item.css',
  templateUrl: './category-item.html',
  inputs:['categoryObj']
})
export class CategoryItem {
  categoryObj:any;
}
