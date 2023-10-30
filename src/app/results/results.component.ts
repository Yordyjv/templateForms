import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})



export class ResultsComponent implements OnInit{
 
  @Input() form1 = {
    flag: false,
    title: "",
    author: "",
    error: ""
  }; 

  message:string = '';

  constructor(private appService:AppService){
    this.appService.getMessage.subscribe(msg => this.message = msg)
  }

  ngOnInit(): void {
      
  }

  updateResults(){ 
    this.appService.setMessage("Updated Message");
  }
}
