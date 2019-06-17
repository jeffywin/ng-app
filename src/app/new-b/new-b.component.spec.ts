import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBComponent } from './new-b.component';

describe('NewBComponent', () => {
  let component: NewBComponent;
  let fixture: ComponentFixture<NewBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
