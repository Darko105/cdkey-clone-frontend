import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './shared/components/product/product/product.component';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: "product-details/:id",component:ProductDetailsComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
