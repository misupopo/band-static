import { Injectable } from '@angular/core';
import { ListModel } from './detail.model';
import { RequestManager } from '../../../../@theme/services';

@Injectable()
export class DetailDataService {
    constructor(private requestManager: RequestManager) {
    }

    public getListData = (listModel: ListModel) => {
        return this.requestManager.requestGetAction(listModel);
    }
}
