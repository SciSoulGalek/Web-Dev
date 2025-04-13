import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy-list.component.html',
})
export class VacancyListComponent implements OnChanges {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private apiService: ApiService) {}

  ngOnChanges(): void {
    if (this.companyId) {
      this.apiService.getCompanyVacancies(this.companyId).subscribe((data) => {
        this.vacancies = data;
      });
    }
  }
}