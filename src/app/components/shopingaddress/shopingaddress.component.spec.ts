import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingaddressComponent } from './shopingaddress.component';

describe('ShopingaddressComponent', () => {
  let component: ShopingaddressComponent;
  let fixture: ComponentFixture<ShopingaddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShopingaddressComponent]
    });
    fixture = TestBed.createComponent(ShopingaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
