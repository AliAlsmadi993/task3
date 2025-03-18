import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-showcatigory',
  templateUrl: './showcatigory.component.html',
  styleUrl: './showcatigory.component.css'
})
export class ShowcatigoryComponent {
  categories: any = [];

  constructor(private _myser: ServiceService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._myser.getCategories().subscribe((data) => {
      console.log("All categories:", data);
      this.categories = data;
    });

  }
}
