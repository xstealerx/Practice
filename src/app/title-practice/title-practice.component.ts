import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-practice',
  templateUrl: './title-practice.component.html',
  styleUrls: ['./title-practice.component.css']
})
export class TitlePracticeComponent implements OnInit {

  title: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
