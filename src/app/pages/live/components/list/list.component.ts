import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListDataService } from './list.service';
import { ListModel } from './list.model';
import { DateManager } from "../../../../@theme/services";

@Component({
    selector: 'orb-liveList',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    public liveListData: any;
    public currentNumber: number = 1;

    constructor(private dateManager: DateManager,
                private listDataService: ListDataService,
                private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params.subscribe((params: Params) => {
            this.currentNumber = (params.pageNumber) ? params.pageNumber : 1;
        });

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

