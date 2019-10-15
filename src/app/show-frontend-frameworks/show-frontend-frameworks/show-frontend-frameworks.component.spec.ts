import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFrontendFrameworksComponent } from './show-frontend-frameworks.component';

describe('ShowFrontendFrameworksComponent', () => {
  let component: ShowFrontendFrameworksComponent;
  let fixture: ComponentFixture<ShowFrontendFrameworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFrontendFrameworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFrontendFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
