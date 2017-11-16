import { Component } from '@angular/core';
import { HomeDataService } from './home.service';
import { NewsModel } from './home.model';
import { DateManager } from '../../@theme/services';

@Component({
    selector: 'orb-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public newsListData: any;
    public liveListData: any;

    constructor(private dateManager: DateManager,
                private homeDataService: HomeDataService) {
        this.getListData({
            params: {
            },
            action: 'live/list',
        }).subscribe((response: any) => {
            this.liveListData = response.result.map((listData) => {
                listData.date = this.dateManager.convertTime(new Date(listData.date));

                return listData;
            });
        },
        error => {
        });

        this.getListData({
            params: {
            },
            action: 'news/list',
        }).subscribe((response: any) => {
            this.newsListData = response.result.map((listData) => {
                listData.date = this.dateManager.convertTime(new Date(listData.date));

                return listData;
            });
        },
        error => {
        });
    }

    private getListData(newsModel: NewsModel) {
        return this.homeDataService
        .getListData(newsModel);
    }
}
