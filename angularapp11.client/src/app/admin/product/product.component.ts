import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categories: any = [];

  constructor(private _ser: ServiceService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._ser.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  postData(data: any) {
    this._ser.postNewProduct(data).subscribe(() => {
      alert("Product added successfully!");
    });
  }
}
