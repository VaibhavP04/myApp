import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckOutModalPage } from './check-out-modal.page';

describe('CheckOutModalPage', () => {
  let component: CheckOutModalPage;
  let fixture: ComponentFixture<CheckOutModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckOutModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
