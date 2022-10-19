import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  subjectParent :object = [
    {id:1, name : '. Tamil'},
    {id : 2 , name : '. English'},
    {id : 3, name : '. Hindi'},
    {id:4, name: '. Maths'},
    {id : 5, name:'. Science'}
  ]

  randomNumber : number | undefined;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  gotoContactMe(){
    this.router.navigate(['/contact'], {skipLocationChange:true})
  }

  public onNumberGenerated(randomNumber : number)
  {
    this.randomNumber = randomNumber
  }
}
