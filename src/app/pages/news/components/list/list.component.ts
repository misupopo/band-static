import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { DateManager } from "../../../../@theme/services";
import { ListDataService } from "./list.service";
import { ListModel } from "./list.model";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'orb-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    public newsListData: any;
    public currentNumber: number = 1;
    public tabSelectData = [
        'news',
        'release',
        'live'
    ];
    public tabState: string;

    constructor(private dateManager: DateManager,
                private listDataService: ListDataService,
                private activatedRoute: ActivatedRoute) {

        this.tabState = 'news';

        this.getListData({
            params: {
            },
            action: 'news/list',
        }).subscribe((response: any) => {
            this.newsListData = this.dateManager.allListConvert(response.result);
        },
        error => {
        });
    }

    public tabSelect(event) {
        this.getListData({
            params: {
            },
            action: this.tabSelectData[event] + '/list',
        }).subscribe((response: any) => {
            this.newsListData = this.dateManager.allListConvert(response.result);
        },
        error => {
        });
    }

    private getListData(listModel: ListModel) {
        return this.listDataService
            .getListData(listModel);
    }
}