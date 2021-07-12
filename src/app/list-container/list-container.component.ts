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

  gridBreakpoint = 1
  tiers: Tier[];
  unsortedCharacters: string[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.setGridBreakPoint(window.innerWidth);
    this.initializeData();
  }

  onResize(event) {
    this.setGridBreakPoint(event.target.innerWidth);
  }

  initializeData(){
    this.tiers = [
      new Tier("S tier", "#88F"),
      new Tier("A tier", "#88F"),
      new Tier("B tier", "#88F"),
      new Tier("C tier", "#88F"),
      new Tier("D tier", "#88F"),
      new Tier("F tier", "#88F")
    ]
    this.unsortedCharacters = Object.assign([],defaultCharacters);
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
      event.container.data.sort();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      event.container.data.sort();
    }
  }

  clickResetButton(){
    this.initializeData();
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

  clickMoveTierUpButton(tier: Tier){
    this.moveTier(tier,true);
  }

  clickMoveTierDownButton(tier: Tier){
    this.moveTier(tier,false);
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

  clickDeleteTierButton(tier: Tier){
    this.tiers.splice(this.tiers.indexOf(tier),1);
    for(let characterName of tier.characters){
      this.unsortedCharacters.push(characterName);
      this.unsortedCharacters.sort();
    }
  }

  moveTier(tier: Tier, upwards: boolean){
    //by "upwards" we mean the position, not the number
    let index: number = this.tiers.indexOf(tier);
    //this *should* not happen, but since indexOf does have a return for bad data, we'll catch it anyway
    if(index < 0) {
      console.error("Tier: "+tier+" isn't actually in the list!");
      return;
    }
    //check to see if we're not trying to move to an invalid position
    if((upwards&&index < 1)||(!upwards&&index == this.tiers.length-1)) return;
    //but we're all clear now, let's move our thing
    let newIndex = upwards ? index - 1 : index + 1
    let oldTier = this.tiers[newIndex];
    this.tiers[newIndex] = tier;
    this.tiers[index] = oldTier;
  }

  openColorDialog(currentColor: string): string{
    return prompt("New color in hex. (this is temporary because the dialog is busted.",currentColor);
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
