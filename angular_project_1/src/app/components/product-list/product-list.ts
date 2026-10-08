import { Categories } from './../categories/categories';
import { Component } from '@angular/core';
import productData from './product-data';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  imports: [FormsModule,FontAwesomeModule,NgxPaginationModule],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  productArr = productData;
  filteredProducts = productData;
  selectedCategory: string = 'All';
  categories;
  searchText: string = '';
  faStar = faStar;
  faHeart = faHeart;

  constructor() {
    let categoryArr = productData.map((product) => product.category);
    this.categories = new Set(['All', ...categoryArr]);
  }
  onCategoryChange(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProducts = productData;
    } else {
      this.filteredProducts = productData.filter((product) => product.category == category);
    }
  }
  onSearchPerformed(searchText: string) {
    console.log('search...', searchText);
    this.filteredProducts = productData.filter((product) =>
      product.description.toLowerCase().includes(searchText.toLowerCase()),
    );
  }
  sortAsc() {
    this.filteredProducts = productData.sort((p1, p2) => p1.price - p2.price);
  }
  sortDesc() {
    this.filteredProducts = productData.sort((p1, p2) => p2.price - p1.price);
  }
}
