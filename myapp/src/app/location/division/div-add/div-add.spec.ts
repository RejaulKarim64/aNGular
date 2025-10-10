import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivAdd } from './div-add';

describe('DivAdd', () => {
  let component: DivAdd;
  let fixture: ComponentFixture<DivAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
