import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  constructor(private _EcomdataService: EcomdataService) {}

  brandsData: any[] = [];

  pageSize: number = 0;
  curentPage: number = 0;
  totalItem: number = 0;

  ngOnInit(): void {
    this._EcomdataService.getBrands().subscribe({
      next: (response) => {
        this.brandsData = response.data;
        this.pageSize = response.metadata.limit;
        this.totalItem = response.results;
        this.curentPage = response.metadata.currentPage;
      },
    });
  }

  pageChanged(num: number): void {
    this.curentPage = num;
    this._EcomdataService.getBrands(num).subscribe({
      next: (response) => {
        this.brandsData = response.data;
        this.pageSize = response.metadata.limit;
        this.totalItem = response.results;
        this.curentPage = response.metadata.currentPage;
      },
    });
  }
}
