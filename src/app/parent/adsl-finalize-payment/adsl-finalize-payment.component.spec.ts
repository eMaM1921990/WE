import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdslFinalizePaymentComponent } from './adsl-finalize-payment.component';

describe('AdslFinalizePaymentComponent', () => {
  let component: AdslFinalizePaymentComponent;
  let fixture: ComponentFixture<AdslFinalizePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdslFinalizePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdslFinalizePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
