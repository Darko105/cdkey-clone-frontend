import { Routes } from '@angular/router';
import { ProductComponent } from './shared/components/product/product/product.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {path: 'product/:id',component: ProductComponent},

];
