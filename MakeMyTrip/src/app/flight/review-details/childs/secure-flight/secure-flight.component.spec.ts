import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureFlightComponent } from './secure-flight.component';

describe('SecureFlightComponent', () => {
  let component: SecureFlightComponent;
  let fixture: ComponentFixture<SecureFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecureFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
