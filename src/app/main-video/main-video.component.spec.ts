import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVideoComponent } from './main-video.component';

describe('MainVideoComponent', () => {
  let component: MainVideoComponent;
  let fixture: ComponentFixture<MainVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
