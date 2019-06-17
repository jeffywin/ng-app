import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashborardComponent } from './dashborard.component';

describe('DashborardComponent', () => {
  let component: DashborardComponent;
  let fixture: ComponentFixture<DashborardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashborardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashborardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
