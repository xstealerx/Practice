import { Component } from '@angular/core';

@Component({
  selector: 'practice',
  template: `
  <h2> Inline Templates
    
  </h2>
  {{course.title | uppercase }} <br/>
  {{ course.rating | number }}
  {{course.students | number:'3.2-2'}} <br/>
  {{course.releaseDate | date:'short'}}
    
    <h3>{{langertext | summary:12}} </h3>
    <button class="btn btn-primary"> Save <button>
    `


})
export class Practice {
  title = 'Practice';
  course ={
    title: "Colles buch",
    rating: 563462,
    students: 105.35,
    releaseDate: new Date(2003, 3,5),
    
  }
  langertext = "asgdlkjjnasndghjlkadnghlkjasdngjksdnglkasdjngaklsjdgnasldkjgnasdkljgnaskdjlgnasjkdlgnasdjklgnasjkldgnjaksdgnalksdjgnasjlkdglnadsgjlkjansdglkasjdgn";
}

