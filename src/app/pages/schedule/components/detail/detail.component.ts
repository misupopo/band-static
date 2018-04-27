import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { DetailDataService } from './detail.service';
import { ListModel } from './detail.model';
import { DateManager } from "../../../../@theme/services";
import { ToggleMenuState } from '../../../../@core/share/toggleMenu.state';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'orb-liveDetail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    public listData: any = {};
    public limitedLayout: boolean = false;
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
                live: '#ff4383',
                info: '#009dff',
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
            case 'info':
                this.router.navigate([`/pages/info/detail/${data._id}`]);
                break;
            default:
                break;
        }
    }
}

