import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
// import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { Userdetails } from './components/userdetails/userdetails';
import { Productdetails } from './components/productdetails/productdetails';
import { Uploadvideos } from './components/uploadvideos/uploadvideos';
import { trainerGuard } from './guards/trainer-guard';
import { canExitGuard } from './guards/can-exit-guard';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  {
    path: 'careers',
    // component: Careers,
    loadComponent:() => import('./components/careers/careers').then((x) => x.Careers),
    children: [
      { path: 'permanent', component: PermanentJobs },
      { path: 'contract', component: ContractJobs },
    ],
  },
  {
    path: 'contactus',
    component: Contactus,
    canDeactivate: [canExitGuard],
  },
  { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: Userdetails },
  { path: 'products', component: ProductList },
  { path: 'productdetails', component: Productdetails },
  {
    path: 'uploadvideos',
    component: Uploadvideos,
    canActivate: [trainerGuard],
  },
  { path: '', component: Home },
  { path: '**', component: Notfound },
];
