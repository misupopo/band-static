import { Injectable } from '@angular/core';
import { NewsModel } from './index.model';
import { RequestManager } from '../../../../@theme/services';

@Injectable()
export class IndexDataService {
    constructor(private requestManager: RequestManager) {
    }

    public getListData = (listModel: NewsModel) => {
        return this.requestManager.requestGetAction(listModel);
    }
}
