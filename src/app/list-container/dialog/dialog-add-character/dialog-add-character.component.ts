import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CharacterDialogContent } from './character-dialog-content';

@Component({
  selector: 'app-dialog-add-character',
  templateUrl: './dialog-add-character.component.html',
  styleUrls: ['./dialog-add-character.component.css']
})
export class DialogAddCharacterComponent implements OnInit {

  characterData: CharacterDialogContent;

  constructor(public dialogRef: MatDialogRef<DialogAddCharacterComponent>) { }

  ngOnInit(): void {
    this.characterData = new CharacterDialogContent();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  pfpInputChange(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.characterData.profilePicURL = event.target.result.toString();
      }
    }
}

}
