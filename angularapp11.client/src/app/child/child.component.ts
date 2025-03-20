import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() ratingEvent = new EventEmitter<number>();
  selectedRating: number = 0;

  setRating(rating: number) {
    this.selectedRating = rating;
    this.ratingEvent.emit(this.selectedRating);
  }
}
