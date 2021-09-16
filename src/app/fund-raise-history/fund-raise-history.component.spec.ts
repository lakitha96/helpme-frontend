import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRaiseHistoryComponent } from './fund-raise-history.component';

describe('FundRaiseHistoryComponent', () => {
  let component: FundRaiseHistoryComponent;
  let fixture: ComponentFixture<FundRaiseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundRaiseHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRaiseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
