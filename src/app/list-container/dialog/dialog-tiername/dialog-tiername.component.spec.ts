import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTiernameComponent } from './dialog-tiername.component';

describe('DialogTiernameComponent', () => {
  let component: DialogTiernameComponent;
  let fixture: ComponentFixture<DialogTiernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTiernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTiernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
