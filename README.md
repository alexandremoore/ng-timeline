# ng-timeline

Simple animated timeline component for Angular 4+

## How to install
```
npm install ng-timeline
```
### Include ng-timeline css or scss to you project
#### CSS
If your using angular-cli, you can add it in the styles array of .angular-cli.json:
```
"styles": [
        "styles.scss",
        "../node_modules/ng-timeline/css/_timeline.css"
      ],
```

#### SCSS
You can also include the SCSS file in your styles.scss:
```
@import "./node_modules/ng-timeline/_timeline.scss";
```

This way, you can override SCSS variables to customize the look and feel of the timeline.
E.g.

```
// Timeline scss variables override
$timeline-background-color: #fff;
$timeline-border-color: #fff;
$timeline-title-color: #fff;
$timeline-body-color: #fff;

@import "./node_modules/ng-timeline/scss/_timeline.scss";
```

## How to use
Import the NgTimelineModule module:
```
import { NgTimelineModule } from 'ng-timeline';
...
@NgModule({
  imports: [
    ...
    NgTimelineModule
  ],
...
```

In your component template:
```
<ng-timeline [entries]="entries" [enableAnimation]="true"></ng-timeline>
```

Create an array of entries (you can use the TimelineEntryBuilder):
```
entries: Array<TimelineEntry> = [];

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
```
