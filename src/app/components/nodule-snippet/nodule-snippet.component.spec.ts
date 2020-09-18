import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { NoduleSnippetComponent } from './nodule-snippet.component';

describe('NoduleSnippetComponent', () => {
  let component: NoduleSnippetComponent;
  let fixture: ComponentFixture<NoduleSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoduleSnippetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoduleSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
