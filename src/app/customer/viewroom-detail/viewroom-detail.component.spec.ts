import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewroomDetailComponent } from './viewroom-detail.component';

describe('ViewroomDetailComponent', () => {
  let component: ViewroomDetailComponent;
  let fixture: ComponentFixture<ViewroomDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewroomDetailComponent]
    });
    fixture = TestBed.createComponent(ViewroomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
