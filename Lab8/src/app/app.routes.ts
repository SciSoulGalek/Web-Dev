import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'product/:name', component: ProductItemComponent }
];

export const appRouting = provideRouter(routes);
