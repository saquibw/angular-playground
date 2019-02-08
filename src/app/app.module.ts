import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [//Component goes here
    AppComponent, UserComponent
  ],
  imports: [//Module goes here
    BrowserModule,
    FormsModule,
    //HttpModule,
    HttpClientModule
  ],
  providers: [DataService],//Service goes here
  bootstrap: [AppComponent]//Root component
})
export class AppModule { }
