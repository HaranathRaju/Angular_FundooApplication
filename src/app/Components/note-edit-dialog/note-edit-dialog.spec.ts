import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditDialog } from './note-edit-dialog';

describe('NoteEditDialog', () => {
  let component: NoteEditDialog;
  let fixture: ComponentFixture<NoteEditDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteEditDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteEditDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
