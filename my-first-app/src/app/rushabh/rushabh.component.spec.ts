import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RushabhComponent } from './rushabh.component';

describe('RushabhComponent', () => {
  let component: RushabhComponent;
  let fixture: ComponentFixture<RushabhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RushabhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RushabhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
