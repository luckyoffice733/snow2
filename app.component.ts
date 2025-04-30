import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  message:string="Working with One-way Binding let start"
   
   txtColor="cyan";

   firstName:string="Enter the firstName";
   lastName:string="Enter the lastName";

   isVisible:boolean=true;
   imgUrl="Angular2.png";


  
  fruits:string[]=["apple","banana","orange","tomato","grapes"];


  employees=[
    {"empId":12121,"empName":"smith","sal":3000},
    {"empId":3121,"empName":"John","sal":4000},
    {"empId":5651,"empName":"Naman","sal":10000},
    {"empId":5653,"empName":"harshit","sal":14000},
    {"empId":5132,"empName":"saicharan","sal":22000},
  ];

  traffic="pink"

   isDisplayed=false;

   show(){
    this.isDisplayed=true;
   }

   hide(){
    this.isDisplayed=false;
   }

  display(){
    alert('welcome to angular');
  }
}
