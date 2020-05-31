import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAddModuleComponent } from './city-add-module.component';

describe('CityAddModuleComponent', () => {
  let component: CityAddModuleComponent;
  let fixture: ComponentFixture<CityAddModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAddModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAddModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
