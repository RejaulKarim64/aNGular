import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conview } from './conview';

describe('Conview', () => {
  let component: Conview;
  let fixture: ComponentFixture<Conview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Conview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
