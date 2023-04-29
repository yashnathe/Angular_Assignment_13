import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phone: string = "";
  address: string = "";

  submitForm() {
    // handle form submission here
  }
}
