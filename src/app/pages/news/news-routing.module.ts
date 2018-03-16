import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from "./components/list/list.component";
import {DetailComponent} from "../live/components/detail/detail.component";

const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        children: [{
            path: 'list',
            component: ListComponent,
        }],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsRoutingModule { }

export const routedComponents = [
    ListComponent,
];
