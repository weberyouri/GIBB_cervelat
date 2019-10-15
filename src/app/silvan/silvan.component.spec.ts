import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilvanComponent } from './silvan.component';

describe('SilvanComponent', () => {
  let component: SilvanComponent;
  let fixture: ComponentFixture<SilvanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilvanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
