import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { StringFilterPipe } from './string-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AttendeeComponent,
    StringFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
