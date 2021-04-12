import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  // L'URL qui sera utilisée pour faire des requêtes
  url: string = 'http://localhost:5555/personnes/'

  personnes:Array<Personne> = new Array<Personne>();

  constructor(private http: HttpClient) {
    this.personnes.push({nom: 'Wick',prenom:'John'});
    this.personnes.push({nom: 'Green',prenom:'Bob'});
  }

  getAll(){
    return this.personnes;
  }

  addPersonne(p:Personne){
    this.personnes.push(p);
  }

  addPerson(p:Personne){
    let API_URL = `${this.url}`;
    return this.http.post(API_URL,p)
    .pipe(
      catchError(this.errorMgmt)
    );
  }

  // fonction pipe() dans RxJS: Vous pouvez utiliser des pipe pour relier
  // les opérateurs entre eux. Les pipes vous permettent de combiner
  // plusieurs fonctions en une seule fonction.

  // La fonction pipe() prend comme arguments les fonctions que vous souhaitez
  // combiner et renvoie une nouvelle fonction qui, lorsqu'elle est exécutée,
  // exécute les fonctions composées dans l'ordre.

  // catchError () - L'opérateur catchError examinera la valeur Observable et fera
  // quelque chose avec cette valeur. Si vous voulez lancer une erreur ou appeler
  // une fonction si vous obtenez une erreur, vous pouvez le faire ici.
  // Dans l'exemple, il appellera errorMgmt et à l'intérieur de cela,
  // il enregistrera simplement cette chaîne.

  // getAllPersons(){
  //   return this.http.get<Array<Personne>>(this.url);
  // }

  getAllPersons(): Observable<any>{
    let API_URL = `${this.url}`;
    return this.http.get<Array<Personne>>(API_URL)
    .pipe(
      map((res:any) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    );
  }

  getPerson(id:any): Observable<any>{
    let API_URL = `${this.url}/${id}`;
    return this.http.get<Array<Personne>>(API_URL)
    .pipe(
      map((res:any) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    );
  }

  deletePerson(id: number) {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
    .pipe(
      map((res:any) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    );
  }

  update(personne: Personne){
    let API_URL = `${this.url}/${personne.id}`;
    return this.http.put<Personne>(API_URL, personne)
      .pipe(
        map((res:any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      );
  }


  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
