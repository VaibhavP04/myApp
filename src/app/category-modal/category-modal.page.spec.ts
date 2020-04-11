import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryModalPage } from './category-modal.page';

describe('CategoryModalPage', () => {
  let component: CategoryModalPage;
  let fixture: ComponentFixture<CategoryModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
