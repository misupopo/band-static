import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import {ListComponent} from "../discography/components/list/list.component";
import {DetailComponent} from "../discography/components/detail/detail.component";

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [{
            path: 'index',
            component: IndexComponent,
        }],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}

export const routedComponents = [
    IndexComponent
];
