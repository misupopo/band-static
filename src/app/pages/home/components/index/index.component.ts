import { Component } from '@angular/core';
import { IndexDataService } from './index.service';
import { NewsModel } from './index.model';
import { DateManager } from "../../../../@theme/services";

@Component({
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    public newsListData: any;
    public liveListData: any;

    constructor(private dateManager: DateManager,
                private indexDataService: IndexDataService) {
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
        return this.indexDataService
        .getListData(newsModel);
    }
}
