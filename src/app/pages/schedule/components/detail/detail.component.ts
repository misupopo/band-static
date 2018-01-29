import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
    getMonth,
    startOfMonth,
    startOfWeek,
    startOfDay,
    endOfMonth,
    endOfWeek,
    endOfDay
} from 'date-fns';
import * as RRule from 'rrule';
import { CalendarEvent } from 'angular-calendar';

import { DetailDataService } from './detail.service';
import { ListModel } from './detail.model';
import { DateManager } from "../../../../@theme/services";

interface RecurringEvent {
    title: string;
    color: any;
    rrule?: {
        freq: RRule.Frequency;
        bymonth?: number;
        bymonthday?: number;
        byweekday?: RRule.Weekday[];
    };
}

interface Film {
    id: number;
    title: string;
    release_date: string;
}

@Component({
    selector: 'orb-liveDetail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    public listData: any = {};
    view: string = 'month';
    viewDate: Date = new Date();
    recurringEvents: RecurringEvent[] = [];
    calendarEvents: CalendarEvent[] = [];
    events: any;

    constructor(private dateManager: DateManager,
                private detailDataService: DetailDataService) {
        this.getListData({
            params: {
            },
            action: 'news/list',
        }).subscribe((response: any) => {
            this.listData = response.result;

            // this.eventInsert(this.listData);

            this.events = [
                {
                    title: 'Recurs on the 5th of each month',
                    start: new Date("2018/01/17 17:00"),
                    color: {
                        primary: '#e3bc08',
                        secondary: '#FDF1BA'
                    },
                    meta: {
                        test: 'test'
                    }
                },
                {
                    title: 'Recurs on the 5th of each month',
                    start: new Date("2018/01/30 17:00"),
                    color: {
                        primary: '#e3bc08',
                        secondary: '#FDF1BA'
                    },
                    meta: {
                        test: 'test'
                    }
                }
            ];
        },
        error => {
        });
    }

    private getListData(listModel: ListModel) {
        return this.detailDataService
            .getListData(listModel);
    }

    // private eventInsert = (calender) => {
    //     this.events = calender.map((data) => {
    //         const colorData = {
    //             release: '#34dfa5',
    //             live: '#ff4383'
    //         };
    //
    //         return {
    //             title: data.article_title,
    //             color: {
    //                 primary: colorData[data.news_type]
    //             },
    //             start: new Date(data.date),
    //             end: new Date(data.date),
    //             data: data
    //         };
    //     });
    // }

    // refresh: Subject<any> = new Subject();
    //
    // eventClicked = (data) => {
    //     console.log(data);
    //     this.router.navigate(['pages', 'news']);
    // }
    //
    // public formChange = (form) => {
    //     this.view = form;
    // }
    //
    // public changeMonth = (monthData) => {
    //
    // }
    //
    // eventTimesChanged({
    //     event,
    //     newStart,
    //     newEnd
    //     }: CalendarEventTimesChangedEvent): void {
    //     event.start = newStart;
    //     event.end = newEnd;
    //     this.refresh.next();
    // }



    ngOnInit(): void {
        // this.updateCalendarEvents();
    }

    public formChange = (form) => {
        this.view = form;
    }

    // updateCalendarEvents(): void {
    //     this.calendarEvents = [];
    //
    //     const startOfPeriod: any = {
    //         month: startOfMonth,
    //         week: startOfWeek,
    //         day: startOfDay
    //     };
    //
    //     const endOfPeriod: any = {
    //         month: endOfMonth,
    //         week: endOfWeek,
    //         day: endOfDay
    //     };
    //
    //     this.recurringEvents.forEach(event => {
    //         const rule: RRule = new RRule(
    //             Object.assign({}, event.rrule, {
    //                 dtstart: startOfPeriod[this.view](this.viewDate),
    //                 until: endOfPeriod[this.view](this.viewDate)
    //             })
    //         );
    //
    //         rule.all().forEach(date => {
    //             this.calendarEvents.push(
    //                 Object.assign({}, event, {
    //                     start: new Date(date)
    //                 })
    //             );
    //         });
    //     });
    // }


}

