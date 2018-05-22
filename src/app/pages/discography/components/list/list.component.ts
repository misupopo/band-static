import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { DateManager } from "../../../../@theme/services";
import { ListDataService } from "./list.service";
import { ListModel } from "./list.model";
import { RequestConfigService } from '../../../../@core/data/request.service';
import { LoadingSpinnerState } from '../../../../@core/share/loadingSpinner.state';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'orb-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    public releaseListData: any;
    public releaseSingleData: any;
    public releaseMvData: any;
    public imageRequestUrl: string;

    constructor(private dateManager: DateManager,
                private listDataService: ListDataService,
                private activatedRoute: ActivatedRoute,
                private requestConfigService: RequestConfigService,
                private loadingSpinnerState: LoadingSpinnerState) {

        this.imageRequestUrl = this.requestConfigService.getRequestUrl();

        this.getListData({
            params: {
            },
            action: 'release/list',
        }).subscribe((response: any) => {
            this.releaseListData = this.dateManager.allListConvert(response.result);
            this.releaseSingleData = this.releaseListData.filter((data) => {
                return data.type === 'single';
            });
            this.releaseMvData = this.releaseListData.filter((data) => {
                return data.type === 'mv';
            });
        },
        error => {
            this.loadingSpinnerState.setLoadingSpinnerState(false);
        });
    }

    public tabSelect(event) {

    }

    private getListData(listModel: ListModel) {
        return this.listDataService
            .getListData(listModel);
    }
}
