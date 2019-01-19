import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hey guys</h1>
  <p>{{myObject.location}}</p>

  <ul>
    <li *ngIf="myArr;then tmpl1 else tmpl2"></li> 
  </ul>

  <ng-template #tmpl1>Yes, I do.</ng-template>
  <ng-template #tmpl2>No, I don't.</ng-template>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myArr = "a";
}
