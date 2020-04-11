import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderConfirmationSheetComponent } from './order-confirmation-sheet.component';

describe('OrderConfirmationSheetComponent', () => {
  let component: OrderConfirmationSheetComponent;
  let fixture: ComponentFixture<OrderConfirmationSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmationSheetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderConfirmationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
