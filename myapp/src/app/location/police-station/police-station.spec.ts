import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceStation } from './police-station';

describe('PoliceStation', () => {
  let component: PoliceStation;
  let fixture: ComponentFixture<PoliceStation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliceStation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceStation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
