import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/common/services/auth.service';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';
import { CuttextPipe } from 'src/app/common/pipes/cuttext.pipe';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule, CuttextPipe],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss'],
})
export class AllordersComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _EcomdataService: EcomdataService
  ) {}

  ordersData: any[] = [];

  userId: string = '';
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: (data) => {
        if (data !== null) {
          this.userId = data.id;
          this._EcomdataService.getUserOrders(this.userId).subscribe({
            next: (response) => {
              this.ordersData = response;
            },
          });
        }
      },
    });
  }
}
