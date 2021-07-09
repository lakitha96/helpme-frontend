import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalTransactionComponent } from './paypal-transaction.component';

describe('PaypalTranasactionComponent', () => {
  let component: PaypalTransactionComponent;
  let fixture: ComponentFixture<PaypalTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
