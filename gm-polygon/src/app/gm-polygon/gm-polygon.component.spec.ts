import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { gmpolygonComponent } from './gm-polygon.component';

describe('gmpolygonComponent', () => {
  let component: gmpolygonComponent;
  let fixture: ComponentFixture<gmpolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ gmpolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(gmpolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
