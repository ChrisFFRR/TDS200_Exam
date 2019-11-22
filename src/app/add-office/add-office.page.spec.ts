import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficePage } from './add-office.page';

describe('AddOfficePage', () => {
  let component: AddOfficePage;
  let fixture: ComponentFixture<AddOfficePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOfficePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
