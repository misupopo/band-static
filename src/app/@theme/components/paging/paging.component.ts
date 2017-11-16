import { Component, Input } from '@angular/core';

@Component({
    selector: 'orb-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.scss']
})
export class PagingComponent {
    @Input('liveListData') liveListData: any;
    public currentNumber: number = 1;
    public collection:  any[] = [
    ];

    constructor() {
        this.collection = [
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            },
            {
                super: 'test'
            }
        ];
    }
}
