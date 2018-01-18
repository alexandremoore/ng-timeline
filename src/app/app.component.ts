import { Component, OnInit } from '@angular/core';
import { TimelineEntry } from './ng-timeline/timeline-entry';
import { TimelineEntryBuilder } from './ng-timeline/timeline-entry-builder';

// tslint:disable:max-line-length
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entries: Array<TimelineEntry> = [];

  ngOnInit(): void {

    this.entries.push(
      new TimelineEntryBuilder().title('2011 - Start')
        .body('Lorem ipsum dolor sit amet consectetur adipiscing elit nisl velit lobortis, sem neque donec at etiam suscipit urna leo sagittis.')
        .build());
    this.entries.push(
      new TimelineEntryBuilder().title('2012')
        .body('Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada sociosqu ultrices, proin aptent eu habitasse dui est lobortis mus gravida, turpis massa nulla feugiat orci sociis interdum libero imperdiet.')
        .build());
    this.entries.push(
      new TimelineEntryBuilder().title('2013')
        .body('Lorem ipsum dolor sit amet consectetur adipiscing elit, natoque porta montes sem egestas eget cum, facilisis a donec hac sociis vitae.')
        .major(true)
        .build());
    this.entries.push(
      new TimelineEntryBuilder().title('2014')
        .body('Lorem ipsum dolor sit amet consectetur adipiscing elit, phasellus velit fringilla feugiat mattis integer sapien, erat senectus quisque inceptos posuere eu.')
        .build());
    this.entries.push(
      new TimelineEntryBuilder().title('2015')
        .body('Lorem ipsum dolor sit amet consectetur adipiscing elit praesent, condimentum commodo aliquam sociosqu laoreet penatibus dignissim tellus, pulvinar parturient ultricies aptent dictum sagittis vulputate.')
        .major(true)
        .build());
    this.entries.push(
      new TimelineEntryBuilder().title('2016')
        .body('Lorem ipsum dolor sit amet consectetur adipiscing elit class aptent et nunc molestie, dictum risus rhoncus diam id maecenas primis venenatis magna massa taciti.')
        .build());
    this.entries.push(
      new TimelineEntryBuilder().title('2017')
        .body('Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque, et odio nunc morbi platea per dictum at blandit, nam mus erat dignissim mi primis placerat.')
        .build());
    this.entries.push(
      new TimelineEntryBuilder().title('2018 - End')
        .body('Lorem ipsum dolor sit amet consectetur adipiscing elit interdum vehicula laoreet, maecenas eu curabitur gravida felis nisl sagittis nostra suspendisse, facilisi eros enim vivamus ante varius mollis nam justo.')
        .major(true)
        .build());
  }
}
