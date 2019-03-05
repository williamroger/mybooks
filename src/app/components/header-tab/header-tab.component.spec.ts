import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTabComponent } from './header-tab.component';

describe('HeadTextComponent', () => {
  let component: HeaderTabComponent;
  let fixture: ComponentFixture<HeaderTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
