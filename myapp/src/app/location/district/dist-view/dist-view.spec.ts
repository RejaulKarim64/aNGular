import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistView } from './dist-view';

describe('DistView', () => {
  let component: DistView;
  let fixture: ComponentFixture<DistView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
