import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailDataService } from './detail.service';
import { DetailModel } from './detail.model';
import { DateManager } from "../../../../@theme/services";
import { LoadingSpinnerState } from '../../../../@core/share/loadingSpinner.state';

@Component({
    selector: 'orb-liveDetail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    public detailData: any = {};
    public detailId: string;

    constructor(private dateManager: DateManager,
                private detailDataService: DetailDataService,
                private activatedRoute: ActivatedRoute,
                private loadingSpinnerState: LoadingSpinnerState) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.detailId = params.id;
        });

        this.getDetailData({
            params: {
                id: this.detailId,
            },
            action: 'live/detail',
        }).subscribe((response: any) => {
            this.detailData = response.result;
        },
        error => {
            this.loadingSpinnerState.setLoadingSpinnerState(false);
        });
    }

    private getDetailData(detailModel: DetailModel) {
        return this.detailDataService
            .getDetailData(detailModel);
    }
}

