import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingSpinnerState } from '../../../@core/share/loadingSpinner.state';
import { RequestConfigService } from '../../../@core/data/request.service';
import 'rxjs/Rx'

@Injectable()
export class RequestManager {
    private requestUrl: string;

    constructor(private http: HttpClient,
                private requestConfigService: RequestConfigService,
                private loadingSpinnerState: LoadingSpinnerState) {
        this.requestUrl = this.requestConfigService.getRequestUrl();
    }

    public requestPostAction (postData: any) {
        this.loadingSpinnerState.setLoadingSpinnerState(true);

        return this.http.post(this.requestUrl + '/' + postData.action, postData)
        .do((json) => {
            this.loadingSpinnerState.setLoadingSpinnerState(false);
            return json;
        });
    }

    public requestGetAction (getData: any) {
        this.loadingSpinnerState.setLoadingSpinnerState(true);

        return this.http.get(this.requestUrl + '/' + getData.action, getData)
        .do((json) => {
            this.loadingSpinnerState.setLoadingSpinnerState(false);
            return json;
        });
    }
}
