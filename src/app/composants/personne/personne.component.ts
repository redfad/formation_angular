import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes:Array<Personne> = new Array<Personne>();
  personne:Personne = {};
  constructor(private personneService:PersonneService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.personnes = this.personneService.getAll()
    this.reloadData();
  }

  reloadData(){
    /*this.personneService.getAllPersons().subscribe(res => {
      this.personnes = res;
    })*/
    this.route.data.subscribe(res=>{
      this.personnes = res.routeResolver;
    });
  }

  savePerson(){
    this.personneService.addPerson(this.personne).subscribe(res=>{
        console.log(res);
        this.reloadData();
       }
    );
  }

  personnesDetails(id:number){
    this.router.navigate(['details',id])
  }

  deletePersonne(id:number){
    this.personneService.deletePerson(id).subscribe(res=>{
      console.log(res);
      this.reloadData();
    });
  }
}
