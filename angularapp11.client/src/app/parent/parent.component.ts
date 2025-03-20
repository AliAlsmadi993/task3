import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  product = {
    name: 'Angular Course',
    description: 'A complete guide to mastering Angular framework.',
    price: 99.99
  };

  rating: number = 0;

  receiveRating(rating: number) {
    this.rating = rating;
  }
}
