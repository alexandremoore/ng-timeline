import { TimelineEntry } from './timeline-entry';

export interface ITimelineEntryBuilder {
    title(title: string): TimelineEntryBuilder;
    body(body: string): TimelineEntryBuilder;
    major(major: boolean): TimelineEntryBuilder;
    build(): TimelineEntry;
}

export class TimelineEntryBuilder implements ITimelineEntryBuilder {
    private _timelineEntry: TimelineEntry;

    constructor() {
        this._timelineEntry = new TimelineEntry();
    }

    title(title: string): TimelineEntryBuilder {
        this._timelineEntry.title = title;
        return this;
    }

    body(body: string): TimelineEntryBuilder {
        this._timelineEntry.body = body;
        return this;
    }

    major(major: boolean): TimelineEntryBuilder {
        this._timelineEntry.major = major;
        return this;
    }

    build(): TimelineEntry {
        return this._timelineEntry;
    }
}
