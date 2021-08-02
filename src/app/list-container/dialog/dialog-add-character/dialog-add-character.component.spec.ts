import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCharacterComponent } from './dialog-add-character.component';

describe('DialogAddCharacterComponent', () => {
  let component: DialogAddCharacterComponent;
  let fixture: ComponentFixture<DialogAddCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
