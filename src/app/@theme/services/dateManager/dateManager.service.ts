import { Injectable } from '@angular/core';
import { sprintf } from 'sprintf-js';
import * as moment from 'moment';

@Injectable()
export class DateManager {
    public allListConvert(list) {
        return list.reduce((collection, data) => {
            const margeData: any = {
            };

            if (data.date) {
                data.date = moment(data.date).utc().format('YYYY/MM/DD HH:mm:ss');
            }

            if (data.enter_time) {
                data.enter_time = moment(data.enter_time).utc().format('YYYY/MM/DD HH:mm:ss');
            }

            if (data.start_time) {
                data.start_time = moment(data.start_time).utc().format('YYYY/MM/DD HH:mm:ss');
            }

            collection.push(Object.assign(data, margeData));

            return collection;
        }, []);
    }

    public convertTime(timeValue: Date) {

        // return moment(timeValue).utc().format('YYYY/MM/DD HH:mm:ss');
        return moment(timeValue).format('YYYY/MM/DD HH:mm:ss');

        // return sprintf('%d/%02d/%02d %02d:%02d:%02d',
        //     timeValue.getFullYear(),
        //     (timeValue.getMonth() + 1),
        //     timeValue.getDate(),
        //     timeValue.getHours(),
        //     timeValue.getMinutes(),
        //     timeValue.getSeconds());
    }
}
