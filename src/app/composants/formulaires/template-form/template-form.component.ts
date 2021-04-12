import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  personnes: Array<Personne> = [];
  personne: Personne = {};

  constructor() { }

  ngOnInit(): void {
  }

  ajouterPersonne(myForm: NgForm) {
    this.personnes.push({ ...this.personne });
    this.personne.nom = '';
    this.personne.prenom = '';
    myForm.form.markAsPristine();
    console.log(this.personnes);
  }

  supprimerPersonne(personne: any) {
    const index: number = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }
}
