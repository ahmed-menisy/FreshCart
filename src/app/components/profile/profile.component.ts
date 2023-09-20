import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastrModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private _EcomdataService: EcomdataService,
    private _AuthService: AuthService,
    private _fb: FormBuilder,
    private _ToastrService: ToastrService
  ) {}

  userName: string = '';

  addressForm!: FormGroup;
  profileData: any[] = [];

  ngOnInit(): void {
    this._AuthService.userData.subscribe((data) => {
      this.userName = data.name;
    });

    this.addressForm = this._fb.group({
      name: [''],
      details: [''],
      phone: [''],
      city: [''],
    });

    this._EcomdataService.getAddresses().subscribe({
      next: (response) => {
        this.profileData = response.data;
      },
    });
  }

  addAddress(): void {
    this._EcomdataService.setAddresses(this.addressForm.value).subscribe({
      next: (response) => {
        this.profileData = response.data;
        this.addressForm.reset();
        this._ToastrService.success(response.message);
      },
    });
  }

  removeAddress(id: string): void {
    this._EcomdataService.removeAddresses(id).subscribe({
      next: (response) => {
        this.profileData = response.data;
        this._ToastrService.success(response.message);
      },
    });
  }
}
