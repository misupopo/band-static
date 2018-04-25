import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
    {
        path: '',
        component: InfoComponent,
        children: [{
            path: '',
            component: ListComponent,
        }, {
            path: 'list',
            component: ListComponent,
        }, {
            path: 'list/:pageNumber',
            component: ListComponent
        }, {
            path: 'detail/:id',
            component: DetailComponent
        }],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InfoRoutingModule { }

export const routedComponents = [
    InfoComponent,
    ListComponent,
    DetailComponent,
];
