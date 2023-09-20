import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Product } from 'src/app/common/interfaces/product';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent, NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private _EcomdataService: EcomdataService) {}

  products: Product[] = [];
  pageSize: number = 0;
  curentPage: number = 0;
  totalItem: number = 0;
  whishList: any[] = [];

  ngOnInit(): void {
    this._EcomdataService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        this.pageSize = response.metadata.limit;
        this.curentPage = response.metadata.currentPage;
        this.totalItem = response.results;
      },
    });

    this._EcomdataService.getWishlist().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.whishList = response.data;
        }
      },
    });
  }

  pageChanged(pageNum: number): void {
    this.curentPage = pageNum;
    this._EcomdataService.getProducts(pageNum).subscribe({
      next: (response) => {
        this.products = response.data;
        this.pageSize = response.metadata.limit;
        this.curentPage = response.metadata.currentPage;
        this.totalItem = response.results;
      },
    });
  }
}
