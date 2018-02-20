import { Injectable } from '@angular/core';
import { accessUrl } from '../../../assets/config/config.json';

@Injectable()
export class RequestConfigService {
    private data = {
        url: '',
    };

    constructor() {
        this.data.url = accessUrl;
    }

    public getRequestUrl (): string {
        return this.data.url;
    }
}
