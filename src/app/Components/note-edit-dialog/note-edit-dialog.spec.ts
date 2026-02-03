import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditDialogComponent } from './note-edit-dialog';

describe('NoteEditDialog', () => {
  let component: NoteEditDialogComponent;
  let fixture: ComponentFixture<NoteEditDialogComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteEditDialogComponent]

    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteEditDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
