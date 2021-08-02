import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TierDialogContent } from './tier-dialog-content';

@Component({
  selector: 'app-dialog-tiername',
  templateUrl: './dialog-tiername.component.html',
  styleUrls: ['./dialog-tiername.component.css']
})
export class DialogTiernameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogTiernameComponent>, @Inject(MAT_DIALOG_DATA) public data: TierDialogContent) { }

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
