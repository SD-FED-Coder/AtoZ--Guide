import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, filter, take, map} from 'rxjs';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myDestroy: any;

  constructor() { }

  ngOnInit(): void {
    const obs$ = new Observable(obs =>{
      console.log("Observable Starts")
      obs.next(100);
      obs.next(200);
      obs.next(300);
      obs.next(400);
      console.log("Observable Ends")
    });
    obs$.subscribe(sub =>{
      console.log(sub)
    });

    const numbers$ = interval(1000).pipe(take(10));
    this.myDestroy = numbers$.subscribe(sub => {
      console.log(sub);
    })

    const of$ = of(1,2,3,4,5,6,7,8,9,10).pipe(filter (f => f % 2 == 0), map(m => m *100));
    of$.subscribe (sub => {
      console.log(sub);
    })

   }
   ngOnDestroy(){
    this.myDestroy.unsubscribe();
   }


}
