import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Tier } from '../classes/tier';
import defaultCharacters from '../../assets/characters.json';
import {DialogColorComponent} from './dialog/dialog-color/dialog-color.component'
import {DialogTiernameComponent} from './dialog/dialog-tiername/dialog-tiername.component'

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  gridBreakpoint = 1;
  tiers = [
    new Tier("S tier", "#88F"),
    new Tier("A tier", "#88F"),
    new Tier("B tier", "#88F"),
    new Tier("C tier", "#88F"),
    new Tier("D tier", "#88F"),
    new Tier("F tier", "#88F")
  ]
  unsortedCharacters = defaultCharacters;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.setGridBreakPoint(window.innerWidth);
  }

  onResize(event) {
    this.setGridBreakPoint(event.target.innerWidth);
  }

  setGridBreakPoint(windowSize){
    //This is ugly as fuck, but apparently gives us the fastest performance in every browser except Internet Explorer, but they can go fuck themselves. You're on 4chan, you don't use that
    if(windowSize <= 1000) this.gridBreakpoint = 3; else
    if(windowSize <= 1500) this.gridBreakpoint = 9;
    else this.gridBreakpoint = 15;

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  clickAddTier(){
    var tierName = prompt("Tier name?", 'X Tier')
    if (tierName != null){
      this.tiers[this.tiers.length] = new Tier(tierName, "#FF6")
    }
  }

  clickAddCharacter(){
    var characterName = prompt("Character name?", '')
    if (characterName != null || characterName.length > 2){
      this.addCharacter(characterName);
    }
    else{
      alert("Invalid character name.");
    }
  }

  addCharacter(characterName: string){
    this.unsortedCharacters[this.unsortedCharacters.length] = characterName;
  }

  clickChangeColorButton(tier: Tier){

    tier.colorHex = this.openColorDialog(tier.colorHex);
  }

  clickChangeTierNameButton(tier: Tier){
    tier.name = this.openTierNameDialog(tier.name);
  }

  openColorDialog(currentColor: string): string{
    return prompt("New color (in hex)",currentColor);
    /*
    TODO: figure out how to properly pass data to these dialog things
    var newColor = currentColor;
    const dialogRef = this.dialog.open(DialogColorComponent, {
      width: '250px',
      data: {color: newColor}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      newColor = result;
    });
    return newColor;
    */
  }

  openTierNameDialog(currentName: string): string{
    return prompt("New name?",currentName);
    /*
    var newName = currentName;
    const dialogRef = this.dialog.open(DialogTiernameComponent, {
      width: '250px',
      data: {newName}
    });

    dialogRef.afterClosed().subscribe(result => {

      newName = result;
      console.debug('The dialog was closed: '+newName);
    });
    return newName;
    */
  }



}
