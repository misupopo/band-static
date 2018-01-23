import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailDataService } from './detail.service';
import { ListModel } from './detail.model';
import { DateManager } from "../../../../@theme/services";
import { Subject } from 'rxjs/Subject';
import { addDays } from 'date-fns';
import {
    CalendarEvent,
    CalendarEventTimesChangedEvent
} from 'angular-calendar';

@Component({
    selector: 'orb-liveDetail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    public listData: any = {};
    view: string = 'month';
    viewDate: Date = new Date();
    events: any = [];

    constructor(private dateManager: DateManager,
                private detailDataService: DetailDataService,
                private activatedRoute: ActivatedRoute) {
        this.getListData({
            params: {
            },
            action: 'news/list',
        }).subscribe((response: any) => {
            this.listData = response.result;

            this.eventInsert(this.listData);
        },
        error => {
        });
    }

    private getListData(listModel: ListModel) {
        return this.detailDataService
            .getListData(listModel);
    }

    private eventInsert = (calender) => {
        this.events = calender.map((data) => {
            const colorData = {
                release: '#34dfa5',
                live: '#ff4383'
            };

            return {
                title: data.article_title,
                color: {
                    primary: colorData[data.news_type]
                },
                start: new Date(data.date),
                end: new Date(data.date)
            };
        });
    }

    // events: any = [
    //     {
    //         title: '轟音ライブ',
    //         color: {
    //             primary: '#e3bc08',
    //             secondary: '#FDF1BA'
    //         },
    //         start: new Date("2018/01/17 17:00"),
    //         end: new Date("2018/01/17 20:30")
    //     },
    //     {
    //         title: '新宿ライブ',
    //         color: {
    //             primary: '#e3bc08',
    //             secondary: '#FDF1BA'
    //         },
    //         start: new Date("2018/01/15 17:00"),
    //         end: new Date("2018/01/16 17:00")
    //     },
    //     {
    //         title: '渋谷ライブ',
    //         color: {
    //             primary: '#e3bc08',
    //             secondary: '#FDF1BA'
    //         },
    //         start: new Date(),
    //         end: new Date("2018/01/18 17:00")
    //     },
    //     {
    //         title: '原宿ライブ',
    //         color: {
    //             primary: '#1e90ff',
    //             secondary: '#D1E8FF'
    //         },
    //         start: new Date(),
    //         end: addDays(new Date(), 1),
    //         data: {
    //             id: '1334'
    //         }
    //     }
    // ];

    refresh: Subject<any> = new Subject();

    eventClicked = (data) => {
        console.log(data);
    }

    public formChange = (form) => {
        this.view = form;
    }

    eventTimesChanged({
        event,
        newStart,
        newEnd
        }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }
}

