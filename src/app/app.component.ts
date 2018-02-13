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

    title = 'app';

    constructor(private loadingSpinnerState: LoadingSpinnerState) {
    }

    ngOnInit(): void {
        this.loadingSpinnerState.loadingSpinnerStateData.subscribe((state: any) => {
            this.loading = state;
        });
    }
}
