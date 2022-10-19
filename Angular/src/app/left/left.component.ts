import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelloServiceService } from '../service/hello-service.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']

})
export class LeftComponent implements OnInit {

@Input() subjectChild : any;
@Output() private numberGenerate1 = new EventEmitter <number>();

  constructor(public hello: HelloServiceService) { }

  ngOnInit(): void {
  }

  Increase(){
    this.hello.addOn();
  }

  public genrateNumber(){
    const randomNumber = Math.random();
    this.numberGenerate1.emit(randomNumber);
  }

}
