import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/common/pipes/cuttext.pipe';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CuttextPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private _EcomdataService: EcomdataService) {}

  cartDetails: any[] = [];
  totalCartPrice: number = 0;
  userId: string = '';

  ngOnInit(): void {
    this._EcomdataService.getCartData().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.cartDetails = response.data.products;
          this.totalCartPrice = response.data.totalCartPrice;
          this._EcomdataService.cartNumber.next(response.numOfCartItems);
          this.userId = response.data._id;
        }
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }

  changeCount(num: number, count: number, id: string): void {
    const newCount = count + num;

    if (newCount > 0) {
      this._EcomdataService.updatePoductCount(id, newCount).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.cartDetails = response.data.products;
            this.totalCartPrice = response.data.totalCartPrice;
          }
        },
      });
    }
  }

  deleteProduct(id: string): void {
    this._EcomdataService.deletePoductCart(id).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.cartDetails = response.data.products;
          this.totalCartPrice = response.data.totalCartPrice;
          this._EcomdataService.cartNumber.next(response.numOfCartItems);
        }
      },
    });
  }

  clearCart(): void {
    this._EcomdataService.clearCart().subscribe({
      next: (response) => {
        if (response.message === 'success') {
          this.cartDetails = [];
          this._EcomdataService.cartNumber.next(0);
        }
      },
    });
  }
}
