import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdlPaymentComponent } from './asdl-payment.component';

describe('AsdlPaymentComponent', () => {
  let component: AsdlPaymentComponent;
  let fixture: ComponentFixture<AsdlPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsdlPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdlPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
