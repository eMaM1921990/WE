import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BssComponent } from './bss.component';

describe('BssComponent', () => {
  let component: BssComponent;
  let fixture: ComponentFixture<BssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
