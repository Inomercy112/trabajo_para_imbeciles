import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFacturationComponent } from './pay-facturation.component';

describe('PayFacturationComponent', () => {
  let component: PayFacturationComponent;
  let fixture: ComponentFixture<PayFacturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayFacturationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayFacturationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
