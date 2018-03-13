import { Component, ViewEncapsulation } from '@angular/core';
import { LoadingSpinnerState } from './@core/share/loadingSpinner.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.scss']
})
export class AppComponent {
    public loading = false;
    public screenWidth: number = 0;

    constructor(private loadingSpinnerState: LoadingSpinnerState) {
    }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
        this.loadingSpinnerState.loadingSpinnerStateData.subscribe((state: any) => {
            this.loading = state;
        });
    }

    onResize(event) {
        this.screenWidth = window.innerWidth;
    }
}
