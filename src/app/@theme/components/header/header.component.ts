import { Component } from '@angular/core';
import { menuItem } from '../../../../assets/config/menu.json';
import { ToggleMenuState } from '../../../@core/share/toggleMenu.state';

@Component({
    selector: 'orb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public menu = menuItem;
    public toggleFlag: boolean = false;

    constructor(private toggleMenuState: ToggleMenuState) {
        this.toggleMenuState.toggleMenuStateData.subscribe((state: any) => {
            this.toggleFlag = state;

            const bodyDom = document.querySelector('body');

            if (this.toggleFlag) {
                bodyDom.className = 'toggleOpen';
            } else {
                bodyDom.className = '';
            }
        });
    }

    public setToggleMenu(flag) {
        this.toggleMenuState.setToggleMenuState(flag);
    }
}
