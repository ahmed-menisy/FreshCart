import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _Renderer2: Renderer2,
    private _Router: Router
  ) {}

  first: boolean = true;
  seconde: boolean = false;
  done: boolean = false;

  @ViewChild('form1') form1!: ElementRef;
  @ViewChild('form2') form2!: ElementRef;
  @ViewChild('form3') form3!: ElementRef;

  isLoading: boolean = false;
  forgotForm!: FormGroup;
  verifyCode!: FormGroup;
  resetPassword!: FormGroup;
  errMsg: string = '';
  email: string = '';

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.verifyCode = new FormGroup({
      resetCode: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{6}$/),
      ]),
    });

    this.resetPassword = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w{6,}$/),
      ]),
    });
  }

  public get f(): {
    [key: string]: AbstractControl<any, any>;
  } {
    return this.forgotForm.controls;
  }

  public get r(): {
    [key: string]: AbstractControl<any, any>;
  } {
    return this.verifyCode.controls;
  }

  public get c(): {
    [key: string]: AbstractControl<any, any>;
  } {
    return this.resetPassword.controls;
  }

  handleForgotPassword(): void {
    this.isLoading = true;
    if (this.forgotForm.valid) {
      console.log(this.forgotForm.value);
      this._AuthService.setForgotPassword(this.forgotForm.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.statusMsg === 'success') {
            this.errMsg = response.message;
            this.isLoading = false;
            this.forgotForm.disable();

            this.email = this.forgotForm.get('email')?.value;
            this.first = false;
            this.seconde = true;
          }
        },
        error: (err) => {
          console.log(err);
          this.errMsg = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }

  handleVerifyResetCode(): void {
    this.isLoading = true;
    if (this.verifyCode.valid) {
      console.log(this.verifyCode.value);
      this._AuthService.setVerifyResetCode(this.verifyCode.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.status === 'Success') {
            this.errMsg = response.status;
            this.isLoading = false;
            this.verifyCode.disable();
            this.seconde = false;
            this.done = true;
            this.resetPassword.get('email')?.setValue(this.email);
            this.resetPassword.get('email')?.disable();
          }
        },
        error: (err) => {
          console.log(err);
          this.errMsg = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }

  handleResetPassword(): void {
    this.isLoading = true;
    if (this.resetPassword.valid) {
      console.log(this.resetPassword.value);
      const userData = {
        email: this.email,
        newPassword: this.resetPassword.get('newPassword')?.value,
      };
      this._AuthService.resetPassword(userData).subscribe({
        next: (response) => {
          console.log(response);
          if (response?.token) {
            this.errMsg = response.message;
            localStorage.setItem('_token', response?.token);
            this._AuthService.saveUser();
            this.isLoading = false;
            this.resetPassword.disable();
            setTimeout(() => {
              this._Router.navigate(['/home']);
            }, 1000);
          }
        },
        error: (err) => {
          console.log(err);
          this.errMsg = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }
}
