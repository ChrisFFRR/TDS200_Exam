import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmodalPage } from './detailmodal.page';

describe('DetailmodalPage', () => {
  let component: DetailmodalPage;
  let fixture: ComponentFixture<DetailmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
