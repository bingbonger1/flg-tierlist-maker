import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Tier } from '../classes/tier';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  tiers = [
    new Tier("S tier"),
    new Tier("A tier"),
    new Tier("B tier"),
    new Tier("C tier"),
    new Tier("D tier"),
    new Tier("F tier")
  ]
  selectedCharacters = [
    'Anzia Viren'

  ];

  unsortedCharacters = [
  'Anna-Marie Lewis', 
  'Chloe Minah', 
  '7 Day Warning',
  'Yabai Klara',
  'Pecorine',
  'Just Doing My Job',
  'Mildly Goth Chick',
  'Biker Slut Reiko',
  'Venmar',
  'Sabrina',
  'Tou-kun',
  'Henry Jaullet',
  'Explorer',
  'A Blonde Stud',
  'Synapsis',
  'Pound Puppies',
  'Sneed',
  'Jailbait Rock',
  'Solomon',
  'Madison Harlow',
  'Laughingstock',
  'Halo 3 Rat',
  'Bandicute'

  ];

  constructor() { }

  ngOnInit(): void {
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
      this.unsortedCharacters[this.unsortedCharacters.length] = characterName;
    }
    else{
      alert("Invalid character name.")
    }
  }

}
