import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  unsortedCharacters = ['Anna-Marie Lewis', 
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

}
