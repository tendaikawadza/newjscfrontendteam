import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproavedrequastComponent } from './approavedrequast.component';

describe('ApproavedrequastComponent', () => {
  let component: ApproavedrequastComponent;
  let fixture: ComponentFixture<ApproavedrequastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproavedrequastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproavedrequastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
