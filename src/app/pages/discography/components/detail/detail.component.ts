import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { DateManager } from "../../../../@theme/services";
import { DetailDataService } from "./detail.service";
import { DetailModel } from "./detail.model";
import { ShareButtons } from '@ngx-share/core';
import { RequestConfigService } from '../../../../@core/data/request.service';
import { downloadItem } from '../../../../../assets/config/download.json';

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
    public downloadList: any;
    public downloadItem: any = downloadItem;

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

            this.detailData.disc_number = this.detailData.disc_number.map((data) => {
                if (data === 'CD') {
                    return 'SINGLE';
                }
            });

            this.shareUrl = '/pages/discography/detail/' + this.detailData._id;

            this.downloadList = Object.keys(this.detailData.download || {}).map((key) => {
                return {
                    name: key,
                    value: this.detailData.download[key]
                };
            });
        },
        error => {
        });
    }

    private getListData(detailModel: DetailModel) {
        return this.distDataService
            .getListData(detailModel);
    }
}
