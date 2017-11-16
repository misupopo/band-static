import { Injectable } from '@angular/core';
import { DetailModel } from './detail.model';
import { RequestManager } from '../../../../@theme/services';

@Injectable()
export class DetailDataService {
    constructor(private requestManager: RequestManager) {
    }

    public getListData = (detailModel: DetailModel) => {
        return this.requestManager.requestGetAction(detailModel);
    }
}
