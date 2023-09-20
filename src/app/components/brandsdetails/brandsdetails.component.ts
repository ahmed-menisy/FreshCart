import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brandsdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brandsdetails.component.html',
  styleUrls: ['./brandsdetails.component.scss'],
})
export class BrandsdetailsComponent implements OnInit {
  constructor(
    private _EcomdataService: EcomdataService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  brandId: any;
  brandDetails: any = null;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.brandId = params.get('id');
      },
    });

    this._EcomdataService.getBrandData(this.brandId).subscribe({
      next: (response) => {
        this.brandDetails = response.data;
      },
    });
  }
}
