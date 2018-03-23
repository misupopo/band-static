import { Injectable } from '@angular/core';
import { accessUrl, webSiteUrl } from '../../../assets/config/config.json';

@Injectable()
export class RequestConfigService {
    private data = {
        url: '',
        webSiteUrl: ''
    };

    constructor() {
        this.data.url = accessUrl;
        this.data.webSiteUrl = webSiteUrl;
    }

    public getRequestUrl (): string {
        return this.data.url;
    }

    public getRequestWebSiteUrl (): string {
        return this.data.webSiteUrl;
    }
}
