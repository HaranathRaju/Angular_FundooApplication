import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-edit-dialog',
  templateUrl: './note-edit-dialog.html',
  styleUrls: ['./note-edit-dialog.css'],
  imports: [MatIconModule,FormsModule]
})
export class NoteEditDialog {

  constructor(
    public dialogRef: MatDialogRef<NoteEditDialog>,
    @Inject(MAT_DIALOG_DATA) public note: any
  ) {}

  close() {
    this.dialogRef.close(this.note);
  }
}