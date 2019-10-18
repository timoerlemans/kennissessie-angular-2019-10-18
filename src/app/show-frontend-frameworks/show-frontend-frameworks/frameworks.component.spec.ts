import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Frameworks } from './frameworks.component';

describe('ShowFrontendFrameworksComponent', () => {
  let component: Frameworks;
  let fixture: ComponentFixture<Frameworks>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frameworks ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Frameworks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
