import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouriComponent } from './youri.component';

describe('YouriComponent', () => {
  let component: YouriComponent;
  let fixture: ComponentFixture<YouriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
