import { EventEmitter } from 'stream';
import { Component } from '@angular/core';
import { FavoriteChangedEventsArgs } from './star/star.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Practice';
  post = {
    title: "Title" ,
    isFavorite: true
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventsArgs) {
    console.log("Favorite changed: " + eventArgs);
    alert("Das geht ");
  }

  alarm(eventArgs: FavoriteChangedEventsArgs){
    alert("Das geht")
  }
}
