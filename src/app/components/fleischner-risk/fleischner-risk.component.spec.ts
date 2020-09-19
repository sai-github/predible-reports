import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { FleischnerRiskComponent } from './fleischner-risk.component';

describe('FleischnerRiskComponent', () => {
  let component: FleischnerRiskComponent;
  let fixture: ComponentFixture<FleischnerRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FleischnerRiskComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleischnerRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
