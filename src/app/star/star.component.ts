import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
 
})
export class StarComponent implements OnInit {

  @Input('istheicon') status: boolean = false;
  @Output('change') click = new EventEmitter();
  @Output('click') clack = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.status = !this.status;
    this.click.emit({ newValue: this.status });
    this.clack.emit({});
  }

}
 export interface FavoriteChangedEventsArgs {
  newValue: boolean;
}