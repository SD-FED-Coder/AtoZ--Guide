import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from '../service/hello-service.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {


  BookId = "1001";
  BookName = "THINK LIKE A MONK";
  BookAuthor = "Jay Shetty";
  BookStatus = "Available";

  btnToggle = true;

  constructor(public hello: HelloServiceService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.btnToggle = false
    }, 2000);
  }

  onToggle(){
    if(this.BookStatus == "Available") {
      this.BookStatus = " Not Available ";
    }
    else{
      this.BookStatus = "Available";
    }
  }

}

