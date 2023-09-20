import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/common/interfaces/category';
import { Product } from 'src/app/common/interfaces/product';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _EcomdataService: EcomdataService) {}

  products: Product[] = [];
  categories!: Category[];
  whishList: any[] = [];

  ngOnInit(): void {
    this._EcomdataService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data.slice(0, 12);
      },
    });

    this._EcomdataService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data;
      },
    });

    this._EcomdataService.whishList.subscribe((data) => {
      if (data.length > 0) {
        this.whishList = data;
      }
    });
  }

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };

  categoriesSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,

    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 7,
      },
    },
    nav: true,
  };
}
