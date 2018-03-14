import { Component } from '@angular/core';
import { ToggleMenuState } from '../@core/share/toggleMenu.state';

@Component({
    selector: 'pages',
    template: `
        <div [ngClass]="{'dis-n': toggleFlag}" class="wrapper">
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
})
export class PagesComponent {
    public toggleFlag: boolean = false;

    constructor(private toggleMenuState: ToggleMenuState) {
        this.toggleMenuState.toggleMenuStateData.subscribe((state: any) => {
            this.toggleFlag = state;
        });
    }
}
