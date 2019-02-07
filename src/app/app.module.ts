import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [//Component goes here
    AppComponent, UserComponent
  ],
  imports: [//Module goes here
    BrowserModule
  ],
  providers: [],//Service goes here
  bootstrap: [AppComponent]//Root component
})
export class AppModule { }
