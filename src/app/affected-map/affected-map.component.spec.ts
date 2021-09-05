import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectedMapComponent } from './affected-map.component';

describe('AffectedMapComponent', () => {
  let component: AffectedMapComponent;
  let fixture: ComponentFixture<AffectedMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectedMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
