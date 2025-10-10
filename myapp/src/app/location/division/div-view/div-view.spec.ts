import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivView } from './div-view';

describe('DivView', () => {
  let component: DivView;
  let fixture: ComponentFixture<DivView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
