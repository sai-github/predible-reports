import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { LungReportComponent } from './lung-report.component';

describe('LungReportComponent', () => {
  let component: LungReportComponent;
  let fixture: ComponentFixture<LungReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LungReportComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LungReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
