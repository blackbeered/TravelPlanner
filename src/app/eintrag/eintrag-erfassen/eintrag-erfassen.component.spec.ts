/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EintragErfassenComponent } from './eintrag-erfassen.component';

describe('EintragErfassenComponent', () => {
  let component: EintragErfassenComponent;
  let fixture: ComponentFixture<EintragErfassenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EintragErfassenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EintragErfassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
