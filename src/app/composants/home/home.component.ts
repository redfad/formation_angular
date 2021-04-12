import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'formation-angular';
  tab: number[] = [2, 3, 5, 8];
  nom = 'Wick';
  couleur = 'blue';

  personnes: Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(200, 'Bond', 'James'),
    new Personne(300, 'Bauer', 'Jack'),
    new Personne(400, 'Seagal', 'Steven')
  ];

  getColor(){
    return "white";
  }

  getBackgroundColor(){
    return "red";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
