import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { Userdetails } from './components/userdetails/userdetails';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  { path: 'careers', component: Careers },
  { path: 'contactus', component: Contactus },
  { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: Userdetails },
  { path: 'products', component: ProductList },
  { path: '', component: Home },
  { path: '**', component: Notfound },
];
