import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name
  constructor() { }

  ngOnInit(): void {
  }
  handle(time: number): void {
    // [time] is string
    // date style follow format props
    console.log(time)}
    clearClickHandle(value){
      
    }

}
