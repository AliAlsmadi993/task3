import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrl: './showproduct.component.css'
})
export class ShowproductComponent {
  products: any = [];

  constructor(private _myser: ServiceService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._myser.getProducts().subscribe((data) => {
      console.log("All products:", data);
      this.products = data;
    });
  }

}
