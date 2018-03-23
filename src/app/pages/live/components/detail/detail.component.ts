import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DetailDataService } from './detail.service';
import { DetailModel } from './detail.model';
import { DateManager } from "../../../../@theme/services";
import { ShareButtons } from '@ngx-share/core';
import { RequestConfigService } from '../../../../@core/data/request.service';

@Component({
    selector: 'orb-liveDetail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    public detailData: any = {};
    public detailId: string;
    public webSiteUrl: string;
    public shareUrl: string;

    constructor(private dateManager: DateManager,
                private detailDataService: DetailDataService,
                private activatedRoute: ActivatedRoute,
                public share: ShareButtons,
                private router: Router,
                private requestConfigService: RequestConfigService) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.detailId = params.id;
        });

        this.webSiteUrl = this.requestConfigService.getRequestWebSiteUrl();

        this.getDetailData({
            params: {
                id: this.detailId,
            },
            action: 'live/detail',
        }).subscribe((response: any) => {
            this.detailData = response.result;
            this.detailData.date = this.dateManager.convertTime(new Date(this.detailData.date));
            this.detailData.enter_time = this.dateManager.convertTime(new Date(this.detailData.enter_time));
            this.detailData.start_time = this.dateManager.convertTime(new Date(this.detailData.start_time));

            this.shareUrl = '/live/detail/' + this.detailData._id;
        },
        error => {
        });
    }

    private getDetailData(detailModel: DetailModel) {
        return this.detailDataService
            .getDetailData(detailModel);
    }
}

