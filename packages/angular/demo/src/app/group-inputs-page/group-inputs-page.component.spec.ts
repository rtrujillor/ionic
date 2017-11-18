import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupInputsPageComponent } from './group-inputs-page.component';

describe('GroupInputsPageComponent', () => {
  let component: GroupInputsPageComponent;
  let fixture: ComponentFixture<GroupInputsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupInputsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupInputsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
