import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConAdd } from './con-add';

describe('ConAdd', () => {
  let component: ConAdd;
  let fixture: ComponentFixture<ConAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
