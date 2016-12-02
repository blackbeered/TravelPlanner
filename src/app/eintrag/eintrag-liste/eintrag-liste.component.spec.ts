/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EintragListeComponent } from './eintrag-liste.component';

describe('EintragListeComponent', () => {
  let component: EintragListeComponent;
  let fixture: ComponentFixture<EintragListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EintragListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EintragListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
