import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrganizationComponent } from './pending-organization.component';

describe('PendingOrganizationComponent', () => {
  let component: PendingOrganizationComponent;
  let fixture: ComponentFixture<PendingOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
