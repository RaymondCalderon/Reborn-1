import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGpsPage } from './tab-gps.page';

describe('TabGpsPage', () => {
  let component: TabGpsPage;
  let fixture: ComponentFixture<TabGpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGpsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
