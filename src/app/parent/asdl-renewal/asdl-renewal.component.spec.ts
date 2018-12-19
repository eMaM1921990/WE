import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdlRenewalComponent } from './asdl-renewal.component';

describe('AsdlRenewalComponent', () => {
  let component: AsdlRenewalComponent;
  let fixture: ComponentFixture<AsdlRenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsdlRenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdlRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
