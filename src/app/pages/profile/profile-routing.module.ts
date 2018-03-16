import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import {ListComponent} from "../live/components/list/list.component";

const routes: Routes = [
    {
        path: '',
        component: DetailComponent,
        children: [{
            path: 'detail',
            component: DetailComponent
        }],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfileRoutingModule {}

export const routedComponents = [
    DetailComponent,
];
