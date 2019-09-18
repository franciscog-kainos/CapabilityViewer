import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderClickComponent } from './table-header-click.component';

describe('TableHeaderClickComponent', () => {
  let component: TableHeaderClickComponent;
  let fixture: ComponentFixture<TableHeaderClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHeaderClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeaderClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
