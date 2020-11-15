import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnabledServiceComponent } from './enabled-service.component';

describe('EnabledServiceComponent', () => {
  let component: EnabledServiceComponent;
  let fixture: ComponentFixture<EnabledServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnabledServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnabledServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
