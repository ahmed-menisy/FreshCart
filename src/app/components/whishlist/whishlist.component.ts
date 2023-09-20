import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CuttextPipe } from 'src/app/common/pipes/cuttext.pipe';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe, ToastrModule],
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss'],
})
export class WhishlistComponent implements OnInit {
  constructor(
    private _EcomdataService: EcomdataService,
    private _ToastrService: ToastrService
  ) {}

  whishList: any[] = [];

  ngOnInit(): void {
    this._EcomdataService.getWishlist().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.whishList = response.data;
          this._EcomdataService.whishNumber.next(response.data.length);
        }
      },
    });
  }

  addToCart(id: string): void {
    this._EcomdataService.addToCart(id);
  }

  removeFromWhish(id: string): void {
    this._EcomdataService.removeWishlist(id).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this._ToastrService.success(response.message, '', {
            positionClass: 'toast-bottom-right',
          });

          this.whishList = this.whishList.filter((item) =>
            response.data.includes(item._id)
          );

          // console.log(this.whishList);
          this._EcomdataService.whishNumber.next(this.whishList.length);

          // this.refresh();
        }
      },
    });
  }
}
