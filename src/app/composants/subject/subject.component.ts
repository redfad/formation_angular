import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Subject :");
    let mysubject = new Subject<number>();
    mysubject.subscribe(x=>console.log("first subscription : "+x));
    mysubject.next(1);
    mysubject.next(2);
    mysubject.next(3);

    mysubject.subscribe(x=>console.log("second subscription : "+x));
    mysubject.next(4);

    console.log("ReplaySubject...");

    let mysubject2 = new ReplaySubject<number>();
    mysubject2.subscribe(x=>console.log("first subscription : "+x));
    mysubject2.next(1);
    mysubject2.next(2);
    mysubject2.next(3);

    mysubject2.subscribe(x=>console.log("second subscription : "+x));
    mysubject2.next(4);

    console.log("BehaviorSubject...");
    let mysubject3 = new BehaviorSubject<number>(1);
    mysubject3.subscribe(x=>console.log("first subscription : "+x));
    mysubject3.next(2);
    mysubject3.next(3);

    mysubject3.subscribe(x=>console.log("second subscription : "+x));
    mysubject3.next(4);
  }

}
