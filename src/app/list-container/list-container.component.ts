import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Tier } from '../classes/tier';
import defaultCharacters from '../../assets/characters.json';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  gridBreakpoint = 1;
  tiers = [
    new Tier("S tier"),
    new Tier("A tier"),
    new Tier("B tier"),
    new Tier("C tier"),
    new Tier("D tier"),
    new Tier("F tier")
  ]
  unsortedCharacters = defaultCharacters;

  constructor() { }

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
      this.tiers[this.tiers.length] = new Tier(tierName)
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

}
