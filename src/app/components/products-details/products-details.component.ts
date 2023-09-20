import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/common/interfaces/product';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _EcomdataService: EcomdataService
  ) {}

  productId: string | null = '';
  productDetails!: Product;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
      },
    });

    this._EcomdataService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.productDetails = response.data;
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };

  addToCart(id: string): void {
    this._EcomdataService.addToCart(id);
  }
}
