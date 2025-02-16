import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent], // Add this line
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
