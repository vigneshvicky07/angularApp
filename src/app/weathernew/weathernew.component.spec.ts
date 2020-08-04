import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathernewComponent } from './weathernew.component';

describe('WeathernewComponent', () => {
  let component: WeathernewComponent;
  let fixture: ComponentFixture<WeathernewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathernewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathernewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
