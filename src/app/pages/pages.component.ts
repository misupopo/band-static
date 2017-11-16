import {Component} from '@angular/core';


@Component({
    selector: 'pages',
    template: `
        <div class="wrapper">
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
})
export class PagesComponent {

}
