import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  personnes:any = [];
  nomPattern = "^[A-Z][a-z]{2,10}";
  prenomPattern = "^[A-Z].*$";

  // personneForm = new FormGroup({
  //   id: new FormControl('', Validators.required),
  //   nom: new FormControl('', [Validators.required, Validators.pattern(this.nomPattern)]), 
  //   prenom: new FormControl('', [Validators.required, this.checkInputValidator]), 
  //   adresse: new FormGroup({
  //     rue: new FormControl('', Validators.required),
  //     ville: new FormControl('', Validators.required),
  //     codePostal: new FormControl('', Validators.required)
  //   })
  // });

  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    nom: ['', [Validators.required, Validators.pattern(this.nomPattern)]],
    prenom: ['', [Validators.required, Validators.pattern(this.prenomPattern)]],
    adresse: this.fb.group({
      rue: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      codePostal: ['', [Validators.required]]
    }),
    sports: this.fb.array([

    ])
  });

  afficherTout(){
    this.personnes.push({ ...this.personneForm.value });
    this.personneForm.reset();
    console.log(this.personneForm.value);
  }

  supprimerPersonne(personne: any) {
    const index: number = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }

  checkInputValidator(control: FormControl) {
    const str: string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z') {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }

  ajouterSport(){
    this.sports.push(this.fb.control(''));
  }

  supprimerSport(i: number){
    this.sports.removeAt(i);
  }

  get id(){
    return this.personneForm.get('id');
  }

  get nom(){
    return this.personneForm.get('nom');
  }

  get prenom(){
    return this.personneForm.get('prenom');
  }

  get sports(){
    return this.personneForm.get('sports') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personneForm.patchValue({
      prenom : 'Doe',
      adresse:{
        codePostal: '06000'
      }
    });
  }

}
