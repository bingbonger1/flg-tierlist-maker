import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-color',
  templateUrl: './dialog-color.component.html',
  styleUrls: ['./dialog-color.component.css']
})
export class DialogColorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogColorComponent>, @Inject(MAT_DIALOG_DATA) public colorHex: string) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
