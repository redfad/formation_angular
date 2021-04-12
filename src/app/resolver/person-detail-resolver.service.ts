import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Personne } from '../interfaces/personne';
import { PersonneService } from '../services/personne.service';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsResolverService implements Resolve<Personne>{

  constructor(private personneService: PersonneService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Personne> {
    let id = route.paramMap.get('id');
    console.log("PersonDetailsResolver avec " + id);
    return this.personneService.getPerson(id)
      .pipe(map(data => {
        if (data) {
          console.log(data);
          return data;
        } else {
          console.log('redirecting');
          this.router.navigate(['/details']);
          return null
        }
      }))
  }
}
