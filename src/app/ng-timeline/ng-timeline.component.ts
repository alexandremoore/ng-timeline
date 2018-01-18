import { Component, Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { TimelineEntry } from './timeline-entry';

@Component({
  selector: 'ng-timeline',
  templateUrl: './ng-timeline.component.html',
  animations: [
    trigger('timelineAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('200ms', [
          animate('1s ease-out', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-25px)',  offset: 0.5}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class NgTimelineComponent {

  @Input() entries: Array<TimelineEntry>;
  @Input() enableAnimation: boolean;

  constructor() { }

}
