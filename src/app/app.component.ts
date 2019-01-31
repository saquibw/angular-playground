import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hey guys</h1>

  <button [disabled]="buttonStatus">My Button new button</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  buttonStatus = false;
}
