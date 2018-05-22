import { Component, ViewEncapsulation } from '@angular/core';
import { IndexDataService } from './index.service';
import { NewsModel } from './index.model';
import { DateManager } from "../../../../@theme/services";
import { NgxCarousel } from 'ngx-carousel';
import { RequestConfigService } from "../../../../@core/data/request.service";
import { LoadingSpinnerState } from '../../../../@core/share/loadingSpinner.state';

@Component({
    encapsulation: ViewEncapsulation.None,
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    public newsListData: any;
    public liveListData: any;
    public carouselOne: NgxCarousel = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        slide: 1,
        speed: 400,
        interval: 4000,
        point: {
            visible: true
        },
        load: 2,
        touch: true,
        loop: true,
        custom: 'banner'
    };
    public carouselData: any = [];
    public imageRequestUrl: string;

    constructor(private dateManager: DateManager,
                private indexDataService: IndexDataService,
                private requestConfigService: RequestConfigService,
                private loadingSpinnerState: LoadingSpinnerState) {

        this.imageRequestUrl = this.requestConfigService.getRequestUrl();

        this.getListData({
            params: {
            },
            action: 'live/list',
        }).subscribe((response: any) => {
            this.liveListData = response.result.map((listData) => {
                listData.date = this.dateManager.convertTime(new Date(listData.date));
                return listData;
            });
        },
        error => {
            this.loadingSpinnerState.setLoadingSpinnerState(false);
        });

        this.getListData({
            params: {
            },
            action: 'news/list',
        }).subscribe((response: any) => {
            this.newsListData = response.result.map((listData) => {
                listData.date = this.dateManager.convertTime(new Date(listData.date));

                return listData;
            });
        },
        error => {
            this.loadingSpinnerState.setLoadingSpinnerState(false);
        });

        this.getListData({
            params: {
            },
            action: 'carousel/list',
        }).subscribe((response: any) => {
            this.carouselData = response.result;
        },
        error => {
            this.loadingSpinnerState.setLoadingSpinnerState(false);
        });
    }

    ngOnInit() {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        }
    }

    private getListData(newsModel: NewsModel) {
        return this.indexDataService
        .getListData(newsModel);
    }
}
