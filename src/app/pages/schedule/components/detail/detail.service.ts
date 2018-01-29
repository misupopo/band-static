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

    public getColorList = () => {
        return {
            red: {
                primary: '#ad2121',
                secondary: '#FAE3E3'
            },
            blue: {
                primary: '#1e90ff',
                secondary: '#D1E8FF'
            },
            yellow: {
                primary: '#e3bc08',
                secondary: '#FDF1BA'
            }
        };
    }
}
