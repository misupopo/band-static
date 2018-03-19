import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscographyComponent } from './discography.component';
import { ListComponent } from "./components/list/list.component";
import { DetailComponent } from "./components/detail/detail.component";

const routes: Routes = [
    {
        path: '',
        component: DiscographyComponent,
        children: [{
            path: '',
            component: ListComponent,
        }, {
            path: 'list',
            component: ListComponent,
        }, {
            path: 'detail/:id',
            component: DetailComponent,
        }],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DiscographyRoutingModule { }

export const routedComponents = [
    DiscographyComponent,
    ListComponent,
    DetailComponent,
];
