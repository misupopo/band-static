import { Injectable } from '@angular/core';
import { NewsModel } from './home.model';
import { RequestManager } from '../../@theme/services';

@Injectable()
export class HomeDataService {
    constructor(private requestManager: RequestManager) {
    }

    public getListData = (listModel: NewsModel) => {
        return this.requestManager.requestGetAction(listModel);
    }
}
