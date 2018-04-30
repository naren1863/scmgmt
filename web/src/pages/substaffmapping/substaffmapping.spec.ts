import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstaffmappingComponent } from './substaffmapping';

describe('SubstaffmappingComponent', () => {
  let component: SubstaffmappingComponent;
  let fixture: ComponentFixture<SubstaffmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstaffmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstaffmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
