import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { DateManager } from "../../../../@theme/services";
import { DetailDataService } from "./detail.service";
import { DetailModel } from "./detail.model";
import { ShareButtons } from '@ngx-share/core';
import { RequestConfigService } from '../../../../@core/data/request.service';

@Component({
    selector: 'orb-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    public detailData: any;
    public imageRequestUrl: string;
    public detailId: string;
    public webSiteUrl: string;
    public shareUrl: string;

    constructor(private dateManager: DateManager,
                private distDataService: DetailDataService,
                private activatedRoute: ActivatedRoute,
                private requestConfigService: RequestConfigService,
                public share: ShareButtons) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.detailId = params.id;
        });

        this.imageRequestUrl = this.requestConfigService.getRequestUrl();

        this.webSiteUrl = this.requestConfigService.getRequestWebSiteUrl();

        this.getListData({
            params: {
                id: this.detailId,
            },
            action: 'release/detail',
        }).subscribe((response: any) => {
            this.detailData = response.result;
            this.detailData.date = this.dateManager.convertTime(new Date(this.detailData.date));
            this.detailData.enter_time = this.dateManager.convertTime(new Date(this.detailData.enter_time));
            this.detailData.start_time = this.dateManager.convertTime(new Date(this.detailData.start_time));

            this.shareUrl = '/pages/discography/detail/' + this.detailData._id;
        },
        error => {
        });
    }

    private getListData(detailModel: DetailModel) {
        return this.distDataService
            .getListData(detailModel);
    }
}
