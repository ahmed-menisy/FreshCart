import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private _EcomdataService: EcomdataService) {}
  categoriesData: any[] = [];

  ngOnInit(): void {
    this._EcomdataService.getCategories().subscribe({
      next: (response) => {
        this.categoriesData = response.data;
      },
    });
  }
}
