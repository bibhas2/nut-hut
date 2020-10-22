import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmViewComponent } from './order-confirm-view.component';

describe('OrderConfirmViewComponent', () => {
  let component: OrderConfirmViewComponent;
  let fixture: ComponentFixture<OrderConfirmViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
