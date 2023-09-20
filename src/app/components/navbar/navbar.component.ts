import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _Renderer2: Renderer2,
    private _EcomdataService: EcomdataService
  ) {}

  @ViewChild('navbar') navbar!: ElementRef;

  cartItemNumber: number = 0;
  whishItemNumber: number = 0;
  userName: string = '';

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: (data) => {
        if (data !== null) {
          console.log('data', data);
          this.userName = data.name
            ? data?.name?.slice(0, 1).toUpperCase()
            : 'U';
        } else {
          this.userName = 'U';
        }
      },
    });

    if (!this._Router.url.includes('cart')) {
      this._EcomdataService.getCartData().subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this._EcomdataService.cartNumber.next(response.numOfCartItems);
          }
        },
        error: (err) => {
          console.log('Error Cart Nav', err.error.message);
        },
      });
    }

    this._EcomdataService.cartNumber.subscribe({
      next: (data) => {
        this.cartItemNumber = data;
      },
    });

    if (!this._Router.url.includes('whishlist')) {
      this._EcomdataService.getWishlist().subscribe({
        next: (response) => {
          if (response.status === 'success') {
            const whishList = response.data.map((item: any) => item._id);
            this._EcomdataService.whishList.next(whishList);
            this._EcomdataService.whishNumber.next(response.data.length);
            this.whishItemNumber = response.data.length;
          }
        },
      });
    }

    this._EcomdataService.whishNumber.subscribe({
      next: (data) => {
        this.whishItemNumber = data;
      },
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (scrollY > 200) {
      this._Renderer2.addClass(this.navbar.nativeElement, 'px-5');
      this._Renderer2.addClass(this.navbar.nativeElement, 'py-3');
    } else {
      this._Renderer2.removeClass(this.navbar.nativeElement, 'px-5');
      this._Renderer2.removeClass(this.navbar.nativeElement, 'py-3');
    }
  }

  logOut(): void {
    localStorage.removeItem('_token');
    this._AuthService.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
