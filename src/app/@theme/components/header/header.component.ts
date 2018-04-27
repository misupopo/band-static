import { Component, HostListener } from '@angular/core';
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

    @HostListener('window:resize')
    onResize() {
        const windowWidth = window.innerWidth;
        const bodyDom = document.querySelector('body');
        const targetElement = <HTMLElement>document.getElementsByClassName('fullSizeWidth')[0];

        if (windowWidth > 1070) {
            bodyDom.className = '';

            if (targetElement) {
                targetElement.style.height = '';
            }

            this.toggleMenuState.setToggleMenuState(false);
        }
    }

    public setToggleMenu(flag) {
        const windowHeight = window.innerHeight;
        const decreaseHeight = 191;
        const setHeight = (windowHeight - decreaseHeight);
        const targetElement = <HTMLElement>document.getElementsByClassName('limitedSizeWidth')[0];

        if (flag) {
            targetElement.style.height = setHeight + 'px';
        } else {
            targetElement.style.height = '';
        }

        this.toggleMenuState.setToggleMenuState(flag);
    }
}
