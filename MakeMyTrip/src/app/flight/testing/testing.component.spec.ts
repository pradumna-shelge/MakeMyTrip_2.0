import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent1 } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent1;
  let fixture: ComponentFixture<TestingComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponent1 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
