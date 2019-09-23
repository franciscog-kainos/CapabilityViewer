import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDialog } from './feedback-dialog.component';

describe('FeedbackDialog', () => {
  let component: FeedbackDialog;
  let fixture: ComponentFixture<FeedbackDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
