import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRequestHistoryComponent } from './fund-request-history.component';

describe('FundRequestHistoryComponent', () => {
  let component: FundRequestHistoryComponent;
  let fixture: ComponentFixture<FundRequestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundRequestHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
