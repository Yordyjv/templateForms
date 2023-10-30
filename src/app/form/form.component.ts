import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
   constructor(private router: Router,
    private route: ActivatedRoute) {}
  
    filled = {
      flag: false,
      title: "",
      author: "",
      error: ""
    }

  submitForm(bookdata: NgForm){
    console.log(bookdata.value["title"])
      
    
    /*

      if(bookdata.value["title"] != "" && bookdata.value["author"] != ""){
        this.filled.flag = true;
        this.filled.title = bookdata.value["title"];
        this.filled.author = bookdata.value["author"];
        this.filled.error = "";
      } else {
        this.filled.flag = true;
        this.filled.title = "Oh no!";
        this.filled.author = "You didn't finish filling out the form!";
        this.filled.error = "Please try again";
      }
      */
  }
}
