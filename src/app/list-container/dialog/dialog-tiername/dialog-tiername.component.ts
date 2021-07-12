import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-tiername',
  templateUrl: './dialog-tiername.component.html',
  styleUrls: ['./dialog-tiername.component.css']
})
export class DialogTiernameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogTiernameComponent>, @Inject(MAT_DIALOG_DATA) public name: string) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
