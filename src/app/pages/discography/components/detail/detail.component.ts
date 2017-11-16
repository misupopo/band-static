import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { DateManager } from "../../../../@theme/services";
import { DetailDataService } from "./detail.service";
import { DetailModel } from "./detail.model";
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

    constructor(private dateManager: DateManager,
                private distDataService: DetailDataService,
                private activatedRoute: ActivatedRoute,
                private requestConfigService: RequestConfigService) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.detailId = params.id;
        });

        this.imageRequestUrl = this.requestConfigService.getRequestUrl();

        this.getListData({
            params: {
                id: this.detailId,
            },
            action: 'release/detail',
        }).subscribe((response: any) => {
            // response.result.date = this.dateManager.convertTime(new Date(response.result));
            this.detailData = response.result;
        },
        error => {
        });
    }

    private getListData(detailModel: DetailModel) {
        return this.distDataService
            .getListData(detailModel);
    }
}