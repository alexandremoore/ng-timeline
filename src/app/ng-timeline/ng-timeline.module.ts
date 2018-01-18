import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgTimelineComponent } from './ng-timeline.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NgTimelineComponent,

  ],
  exports: [
    NgTimelineComponent,

  ]
})
export class NgTimelineModule { }
