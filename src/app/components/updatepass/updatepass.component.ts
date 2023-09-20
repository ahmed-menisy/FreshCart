import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  FormControlOptions,
} from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './updatepass.component.html',
  styleUrls: ['./updatepass.component.scss'],
})
export class UpdatepassComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _fb: FormBuilder,
    private _Router: Router
  ) {}

  passwordShow: boolean = false;
  curentPasswordShow: boolean = false;
  rePasswordShow: boolean = false;
  updateForm!: FormGroup;
  errMsg: string = '';
  isLoading: boolean = false;

  ngOnInit(): void {
    this.updateForm = this._fb.group(
      {
        currentPassword: [
          '',
          [Validators.required, Validators.pattern(/^\w{6,}$/)],
        ],
        password: ['', [Validators.required, Validators.pattern(/^\w{6,}$/)]],
        rePassword: [''],
      },
      { validator: [this.checkPassword] } as FormControlOptions
    );
  }

  checkPassword(group: AbstractControl): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if (rePassword?.value === '') {
      rePassword?.setErrors({ required: true });
    } else if (rePassword?.value !== password?.value) {
      rePassword?.setErrors({ mismatch: true });
    }
  }

  public get f(): {
    [key: string]: AbstractControl<any, any>;
  } {
    return this.updateForm.controls;
  }

  handleUpdate(): void {
    this.isLoading = true;
    if (this.updateForm.valid) {
      this._AuthService.setChangePassword(this.updateForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this.isLoading = false;
            console.log(response);
            localStorage.setItem('_token', response.token);
            this.updateForm.reset();
            this.errMsg = response.message;
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.errMsg = err.error.message;
        },
      });
    }
  }
}
