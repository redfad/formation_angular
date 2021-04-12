import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Personne } from '../interfaces/personne';
import { PersonneService } from '../services/personne.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolverService implements Resolve<Personne[]>{

  constructor(private personService:PersonneService) { }

  resolve(): Observable<Personne[]>{
      return this.personService.getAllPersons();
  }
}
