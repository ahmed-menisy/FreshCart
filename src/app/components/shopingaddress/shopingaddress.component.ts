import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';

@Component({
  selector: 'app-shopingaddress',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shopingaddress.component.html',
  styleUrls: ['./shopingaddress.component.scss'],
})
export class ShopingaddressComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _EcomdataService: EcomdataService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  shopForm!: FormGroup;
  isLoading: boolean = false;
  errMsg: string = '';
  userId: string | null = '';

  ngOnInit(): void {
    this.shopForm = this._fb.group({
      details: ['', [Validators.required, Validators.minLength(2)]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
      city: ['', [Validators.required, Validators.minLength(2)]],
    });

    this._ActivatedRoute.queryParamMap.subscribe({
      next: (params) => {
        this.userId = params.get('userid');
      },
    });
  }

  public get f(): {
    [key: string]: AbstractControl<any, any>;
  } {
    return this.shopForm.controls;
  }

  handleForm(): void {
    this.isLoading = true;
    if (this.shopForm.valid) {
      this._EcomdataService
        .SetcheckOut(this.userId, this.shopForm.value)
        .subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.isLoading = false;
              window.open(response.session.url, '_blank');
              console.log(response);
            }
          },
          error: (err) => {
            console.log(err);
            this.errMsg = err?.error?.message;
            this.isLoading = false;
          },
        });
    }
  }
}
