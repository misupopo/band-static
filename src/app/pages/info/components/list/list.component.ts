import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListDataService } from './list.service';
import { ListModel } from './list.model';
import { DateManager } from "../../../../@theme/services";
import { ShareButtons } from '@ngx-share/core';
import { RequestConfigService } from '../../../../@core/data/request.service';
import { LoadingSpinnerState } from '../../../../@core/share/loadingSpinner.state';

@Component({
    selector: 'orb-infoList',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    public infoListData: any;
    public currentNumber: number = 1;
    public webSiteUrl: string;

    constructor(private dateManager: DateManager,
                private listDataService: ListDataService,
                private activatedRoute: ActivatedRoute,
                public share: ShareButtons,
                private router: Router,
                private requestConfigService: RequestConfigService,
                private loadingSpinnerState: LoadingSpinnerState) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.currentNumber = (params.pageNumber) ? params.pageNumber : 1;
        });

        this.webSiteUrl = this.requestConfigService.getRequestWebSiteUrl();

        this.getListData({
            params: {
            },
            action: 'info/list',
        }).subscribe((response: any) => {
            this.infoListData = response.result.map((listData) => {
                listData.date = this.dateManager.convertTime(new Date(listData.date));

                return listData;
            });
        },
        error => {
            this.loadingSpinnerState.setLoadingSpinnerState(false);
        });
    }

    private getListData(listModel: ListModel) {
        return this.listDataService
            .getListData(listModel);
    }
}

