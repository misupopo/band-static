import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DetailDataService } from './detail.service';
import { ListModel } from './detail.model';
import { DateManager } from "../../../../@theme/services";
import { ToggleMenuState } from '../../../../@core/share/toggleMenu.state';
import { LoadingSpinnerState } from '../../../../@core/share/loadingSpinner.state';

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
                private router: Router,
                private loadingSpinnerState: LoadingSpinnerState) {

        this.getListData({
            params: {
            },
            action: 'news/list',
        }).subscribe((response: any) => {
            this.listData = this.dateManager.allListConvert(response.result);
            this.events = this.eventInsert(this.listData);
        },
        error => {
            this.loadingSpinnerState.setLoadingSpinnerState(false);
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

            const renderData = data.news_type === 'live' ? data.enter_time : data.date;

            return {
                title: data.article_title,
                color: {
                    primary: colorData[data.news_type]
                },
                start: new Date(renderData),
                end: new Date(renderData),
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

