import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalRegisterUserComponent } from './normal-register-user.component';

describe('NormalRegisterUserComponent', () => {
  let component: NormalRegisterUserComponent;
  let fixture: ComponentFixture<NormalRegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalRegisterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
