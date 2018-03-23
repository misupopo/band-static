import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListDataService } from './list.service';
import { ListModel } from './list.model';
import { DateManager } from "../../../../@theme/services";
import { ShareButtons } from '@ngx-share/core';
import { RequestConfigService } from '../../../../@core/data/request.service';

@Component({
    selector: 'orb-liveList',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    public liveListData: any;
    public currentNumber: number = 1;
    public webSiteUrl: string;

    constructor(private dateManager: DateManager,
                private listDataService: ListDataService,
                private activatedRoute: ActivatedRoute,
                public share: ShareButtons,
                private router: Router,
                private requestConfigService: RequestConfigService) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.currentNumber = (params.pageNumber) ? params.pageNumber : 1;
        });

        this.webSiteUrl = this.requestConfigService.getRequestWebSiteUrl();

        this.getListData({
            params: {
            },
            action: 'live/list',
        }).subscribe((response: any) => {
            this.liveListData = response.result.map((listData) => {
                listData.date = this.dateManager.convertTime(new Date(listData.date));
                listData.enter_time = this.dateManager.convertTime(new Date(listData.enter_time));
                listData.start_time = this.dateManager.convertTime(new Date(listData.start_time));

                return listData;
            });
        },
        error => {
        });
    }

    private getListData(listModel: ListModel) {
        return this.listDataService
            .getListData(listModel);
    }
}

