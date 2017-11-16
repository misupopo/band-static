import { Component } from '@angular/core';
import { menuItem } from '../../../../assets/config/menu.json';

@Component({
    selector: 'orb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public menu = menuItem;

    constructor() {}
}
