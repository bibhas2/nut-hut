import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShopcartPageComponent } from './shopcart-page/shopcart-page.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "product-details/:productId", component: ProductPageComponent},
  {path: "cart", component: ShopcartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
