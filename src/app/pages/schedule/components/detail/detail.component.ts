import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetailDataService } from './detail.service';
import { ListModel } from './detail.model';
import { DateManager } from "../../../../@theme/services";

@Component({
    selector: 'orb-liveDetail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    public listData: any = {};
    view: string = 'month';
    viewDate: Date = new Date();
    events: any;

    constructor(private dateManager: DateManager,
                private detailDataService: DetailDataService,
                private router: Router) {
        this.getListData({
            params: {
            },
            action: 'news/list',
        }).subscribe((response: any) => {
            this.listData = this.dateManager.allListConvert(response.result);

            console.log(this.listData);

            this.events = this.eventInsert(this.listData);
        },
        error => {
        });
    }

    private getListData(listModel: ListModel) {
        return this.detailDataService
            .getListData(listModel);
    }

    private eventInsert = (calender) => {
        return calender.map((data) => {
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
                end: new Date(data.date),
                data: data
            };
        });
    }

    public formChange = (form) => {
        this.view = form;
    }

    public dayClicked = (data) => {
        const newsType = data.news_type;

        switch (newsType){
            case 'release':
                this.router.navigate([`/pages/discography/detail/${data._id}`]);
                break;
            case 'live':
                this.router.navigate([`/pages/live/detail/${data._id}`]);
                break;
            default:
                break;
        }
    }
}

