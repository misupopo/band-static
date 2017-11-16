import { Component } from '@angular/core';
import { menuItem } from '../../../../assets/config/menu.json';

@Component({
    selector: 'orb-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    public menu = menuItem;

    constructor() {}
}
