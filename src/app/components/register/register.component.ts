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
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _fb: FormBuilder,
    private _Router: Router
  ) {}

  passwordShow: boolean = false;
  rePasswordShow: boolean = false;
  registerForm!: FormGroup;
  errMsg: string = '';
  isLoading: boolean = false;

  ngOnInit(): void {
    this.registerForm = this._fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/^\w{6,}$/)]],
        rePassword: [''],
        phone: [
          '',
          [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
        ],
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
    return this.registerForm.controls;
  }

  handleRegister(): void {
    this.isLoading = true;
    if (this.registerForm.valid) {
      this._AuthService.setRegister(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this.isLoading = false;
            this._Router.navigate(['/login']);
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
