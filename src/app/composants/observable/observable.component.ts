import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, merge, Observable, of, Subscription, timer, zip } from 'rxjs';
import { filter, map, max, mergeMap, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit ,OnDestroy {

  status='';
  tab:Array<number>=[];
  subscriptions!:Subscription;

  constructor() { }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    const tableau = [1,2,3];
    //const observable : Observable<number> = from(tableau);

    /*const observable : Observable<number> = interval(1000).pipe(
      take(10),
      map(elt=>elt+3),
      //filter(elt=>elt%2==0)
      max()
      );*/
      const observable1 : Observable<number> = of(1,2,3);
      const observable2 : Observable<number> = of(4,5,6);
      const merged = merge(observable1, observable2);


    //const observable : Observable<number> = timer(3000,1000);
    this.subscriptions =  merged.subscribe((value:number) =>{
      this.tab.push(value);
    },
    err =>{
        this.status = err;
    },
    () =>{
      this.status='fini';
    })

    //this.getCurrentCity().subscribe(city=>console.log(city));
    //this.getTemperature('paris').subscribe(tem=>console.log(tem));

    this.currentCityTemperature.subscribe(temp=>console.log(temp));

  }

  getCurrentCity = () => {
    /* Produce one value from the array every second. */
    return zip(
        from(['Strasbourg', 'Paris', 'Lyon']),
        interval(1000)
    )
        .pipe(map(([city]) => city));
  }

  getTemperature = (city:any) => {
    return interval(1000).pipe(map(()=>100/city.length));
  }

  currentCityTemperature = this.getCurrentCity()
  .pipe(switchMap((city)=> {console.log(100/city.length);return this.getTemperature(city)}));
}
