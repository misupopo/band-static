import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToggleMenuState {
    public toggleMenuStateData = new Subject<Object>();
    public toggleMenuWidthLimitedStateData = new Subject<Object>();

    constructor() {
        this.toggleMenuStateData['state'] = false;
        this.toggleMenuWidthLimitedStateData['state'] = false;
    }

    public setToggleMenuState (state: boolean) {
        this.toggleMenuStateData['state'] = state;
        this.toggleMenuStateData.next(state);
    }

    public setToggleMenuWidthLimitedState (state: boolean) {
        this.toggleMenuWidthLimitedStateData['state'] = state;
        this.toggleMenuWidthLimitedStateData.next(state);
    }
}
