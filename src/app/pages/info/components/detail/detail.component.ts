import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DetailDataService } from './detail.service';
import { DetailModel } from './detail.model';
import { DateManager } from "../../../../@theme/services";
import { ShareButtons } from '@ngx-share/core';
import { RequestConfigService } from '../../../../@core/data/request.service';
import { LoadingSpinnerState } from '../../../../@core/share/loadingSpinner.state';

@Component({
    selector: 'orb-infoDetail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    public detailData: any = {};
    public detailId: string;
    public webSiteUrl: string;
    public shareUrl: string;
    public imageRequestUrl: string;

    constructor(private dateManager: DateManager,
                private detailDataService: DetailDataService,
                private activatedRoute: ActivatedRoute,
                public share: ShareButtons,
                private router: Router,
                private requestConfigService: RequestConfigService,
                private loadingSpinnerState: LoadingSpinnerState) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.detailId = params.id;
        });

        this.imageRequestUrl = this.requestConfigService.getRequestUrl();

        this.webSiteUrl = this.requestConfigService.getRequestWebSiteUrl();

        this.getDetailData({
            params: {
                id: this.detailId,
            },
            action: 'info/detail',
        }).subscribe((response: any) => {
            this.detailData = response.result;
            this.detailData.date = this.dateManager.convertTime(new Date(this.detailData.date));

            this.shareUrl = '/pages/info/detail/' + this.detailData._id;
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

