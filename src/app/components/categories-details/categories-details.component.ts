import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss'],
})
export class CategoriesDetailsComponent implements OnInit {
  constructor(
    private _EcomdataService: EcomdataService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  categoryId: string | null = '';
  categoryData: any = null;
  subCategoryData: any[] = [];

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.categoryId = params.get('id');
      },
    });

    this._EcomdataService.getCategoriesById(this.categoryId).subscribe({
      next: (response) => {
        this.categoryData = response.data;
      },
    });

    this._EcomdataService.getSubCategoriesToCat(this.categoryId).subscribe({
      next: (response) => {
        this.subCategoryData = response.data;
      },
    });
  }
}
