import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgTimelineModule } from './ng-timeline/ng-timeline.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
