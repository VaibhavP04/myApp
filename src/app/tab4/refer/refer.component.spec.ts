import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferComponent } from './refer.component';

describe('ReferComponent', () => {
  let component: ReferComponent;
  let fixture: ComponentFixture<ReferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
