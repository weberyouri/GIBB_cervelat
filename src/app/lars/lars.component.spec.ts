import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LarsComponent } from './lars.component';

describe('LarsComponent', () => {
  let component: LarsComponent;
  let fixture: ComponentFixture<LarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
