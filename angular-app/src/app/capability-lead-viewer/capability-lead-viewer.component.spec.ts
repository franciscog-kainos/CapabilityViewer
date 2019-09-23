import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityLeadViewerComponent } from './capability-lead-viewer.component';

describe('CapabilityLeadViewerComponent', () => {
  let component: CapabilityLeadViewerComponent;
  let fixture: ComponentFixture<CapabilityLeadViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityLeadViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityLeadViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
