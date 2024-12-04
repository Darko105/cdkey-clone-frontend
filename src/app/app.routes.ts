import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './shared/components/product/product/product.component';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { ProductListingComponent } from './features/product-listing/product-listing.component';
import { LoginSignupComponent } from './features/login-signup/login-signup.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: "product-details/:id",component:ProductDetailsComponent},
  {path:"user",component:UserProfileComponent},
  {path:"user/:selected",component:UserProfileComponent},
  {path:'product-listing/:param',component:ProductListingComponent},
  {path:'login-signup',component:LoginSignupComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
