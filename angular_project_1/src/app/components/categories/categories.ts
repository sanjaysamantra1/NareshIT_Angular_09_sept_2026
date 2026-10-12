import { Component } from '@angular/core';
import { CategoryItem } from '../category-item/category-item';

@Component({
  imports: [CategoryItem],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories {
  categoryArr = [
  { label: "Grocery", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/8b4adaace948fe23.jpg?q=60" },
  { label: "Mobile", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/a6189afdd765a687.jpg?q=60" },
  { label: "Appliances", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/51b0d5f9aabc2462.jpg?q=60" },
  { label: "Beauty", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/d31d524f681630af.jpg?q=60" },
  { label: "Furniture", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/9be859f78d39cc22.jpg?q=60" },
  { label: "Fashion", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/5dca7713b355df43.jpg?q=60" },
  { label: "Travel", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/d7eae409dc461a54.jpg?q=60" },
  { label: "Electronics", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/a080ac3397f3612d.png?q=60" },
  { label: "Supercoin", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/e476bbcf4677c695.jpg?q=60" }
];
}
