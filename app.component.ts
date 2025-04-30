import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  message:string="Working with One-way Binding let start"
   
   txtColor="cyan";

   firstName:string="Enter the firstName";
   lastName:string="Enter the lastName";

  display(){
    alert('welcome to angular');
  }


}
