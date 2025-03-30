import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <h1>Product Categories</h1>
    <select [(ngModel)]="selectedCategory" (change)="selectCategory()">
      <option *ngFor="let category of categories" [value]="category">{{ category }}</option>
    </select>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: string[] = ["Smartphones", "Laptops and Tablets", "TVs and Consoles", "Accessories"];
  selectedCategory: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = params.get('category') || this.categories[0];
    });
  }

  selectCategory() {
    this.router.navigate(['/products', this.selectedCategory]);
  }
}
