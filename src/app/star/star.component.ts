import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated

  
 
})
export class StarComponent {

  @Input('istheicon') status: boolean = false;
  @Output('change') click = new EventEmitter();
  @Output('click') clack = new EventEmitter();

   onClick() {
    this.status = !this.status;
    this.click.emit({ newValue: this.status });
    this.clack.emit({});
  }

}
 export interface FavoriteChangedEventsArgs {
  newValue: boolean;
}