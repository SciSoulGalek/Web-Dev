import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  { path: 'products/:category', component: ProductsComponent },
  { path: 'product/:id', component: ProductItemComponent },
  { path: '', redirectTo: '/products/all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
