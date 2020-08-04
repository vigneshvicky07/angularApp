import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstblogComponent } from './firstblog.component';

describe('FirstblogComponent', () => {
  let component: FirstblogComponent;
  let fixture: ComponentFixture<FirstblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
