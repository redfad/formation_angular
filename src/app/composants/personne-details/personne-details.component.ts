import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {
  personne!:Personne;
  id!:number;
  constructor(private personneService:PersonneService, private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    /*this.id = this.route.snapshot.params['id'];
    this.personneService.getPerson(this.id).subscribe(res=>{
      this.personne = res
    });*/

    this.personne = this.route.snapshot.data['personne'];
  }

  majPersonne(myForm: NgForm) {
    console.log(this.personne);
    this.personneService.update(this.personne).subscribe(res=>{
      console.log(res);
    });
  }

}
