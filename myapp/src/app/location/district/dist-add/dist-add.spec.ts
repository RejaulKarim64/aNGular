import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistAdd } from './dist-add';

describe('DistAdd', () => {
  let component: DistAdd;
  let fixture: ComponentFixture<DistAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
