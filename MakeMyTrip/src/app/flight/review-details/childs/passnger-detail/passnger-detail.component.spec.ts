import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassngerDetailComponent } from './passnger-detail.component';

describe('PassngerDetailComponent', () => {
  let component: PassngerDetailComponent;
  let fixture: ComponentFixture<PassngerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassngerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassngerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
