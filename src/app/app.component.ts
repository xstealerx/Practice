
import { Component } from '@angular/core';
import { FavoriteChangedEventsArgs } from './star/star.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any;
  

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course 1'},
      { id: 2, name: 'course 2'},
      { id: 3, name: 'course 3'}
    ];
  }

  trackCourse(index: any, course: any){
    return course? course.id : undefined;
  }

  //   onAdd() {
  //     this.courses.push({ id:4, name: 'course4'});
  //   }

  // onRemove(course: any) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1) ;

  // }
  // onChange(course: any ) {
  //   course.name = 'Updated'
  // }


  // number = 0;
  // tweet = {
  //   body: 'Here ist the body of a tweet ...',
  //   isLiked: false,
  //   likesCount: 10
  // }

  // title = 'Practice';
  // post = {
  //   title: "Title" ,
  //   isFavorite: false
  // }
  // onFavoriteChanged(eventArgs: FavoriteChangedEventsArgs) {
  //   console.log("Favorite changed: " + eventArgs);
    
  // }

  // alarm(eventArgs: FavoriteChangedEventsArgs){
  //   alert("Das geht wirklich ")
  //   console.log("Meldung")
  // }


  // like(eventArgs: FavoriteChangedEventsArgs) {
  //   let i = 0 ;
  //   i++;
  // }
}
