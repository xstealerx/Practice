import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {


  @Input('likesCount')  number: number = 10000;
  @Input('isActive')  status: boolean = false;
  // @Output('click') click = new EventEmitter();

  onClick() {
    this.number += (this.status) ? -2 : 2;
    this.status =!this.status;
    // this.click.emit({ newValue: this.status });
    // this.click.emit({newNumber: this. number})
  }



 

}
// export interface FavoriteChangedEventsArgs {
//   newValue: boolean;
//   newNumber: 0;
// }