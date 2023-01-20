import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryrequastComponent } from './inventoryrequast.component';

describe('InventoryrequastComponent', () => {
  let component: InventoryrequastComponent;
  let fixture: ComponentFixture<InventoryrequastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryrequastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryrequastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
