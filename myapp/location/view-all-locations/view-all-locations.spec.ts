import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLocations } from './view-all-locations';

describe('ViewAllLocations', () => {
  let component: ViewAllLocations;
  let fixture: ComponentFixture<ViewAllLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllLocations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllLocations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
