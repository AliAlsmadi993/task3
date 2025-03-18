import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _ser: ServiceService) { }

  ngOnInit() {

  }

  userData: any;
  getData(enteredUser:any) {
    this._ser.getAllUsers().subscribe((data) => {

      let user = data.find((p: any) => p.Email == enteredUser.Email && p.password == enteredUser.password);
      this.userData = user

      if (user) {
        alert("login successfully")
      } else {
        alert("Invalid Email or password ")

      }

    });
  }
}
