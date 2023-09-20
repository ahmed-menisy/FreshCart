import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlankComponent {
  constructor(private _Renderer2: Renderer2) {}

  @ViewChild('goUp') goUp!: ElementRef;

  @HostListener('window:scroll')
  onScroll(): void {
    if (scrollY > 300) {
      this._Renderer2.removeClass(this.goUp.nativeElement, 'hide');
    } else {
      this._Renderer2.addClass(this.goUp.nativeElement, 'hide');
    }
  }

  goToUp(): void {
    scrollTo(0, 0);
  }
}
