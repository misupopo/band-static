import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveComponent } from './live.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
    {
        path: '',
        component: LiveComponent,
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
export class LiveRoutingModule { }

export const routedComponents = [
    LiveComponent,
    ListComponent,
    DetailComponent,
];
