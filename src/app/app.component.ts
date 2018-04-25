import { Component, ViewEncapsulation } from '@angular/core';
import { LoadingSpinnerState } from './@core/share/loadingSpinner.state';
import { ToggleMenuState } from './@core/share/toggleMenu.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.scss']
})
export class AppComponent {
    public loading = false;
    public screenWidth: number = 0;
    public windowObject: any = window;

    constructor(private loadingSpinnerState: LoadingSpinnerState,
                private toggleMenuState: ToggleMenuState) {

        this.windowObject.particlesJS.load('particles-js', 'assets/config/particles.json', function() {
        });
    }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;

        if (this.screenWidth < 1070) {
            this.toggleMenuState.setToggleMenuWidthLimitedState(true);
        }

        this.loadingSpinnerState.loadingSpinnerStateData.subscribe((state: any) => {
            this.loading = state;
        });
    }

    onResize(event) {
        this.screenWidth = window.innerWidth;

        if (this.screenWidth < 1070) {
            this.toggleMenuState.setToggleMenuWidthLimitedState(true);
        }
    }
}
