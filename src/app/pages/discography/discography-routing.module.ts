import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from "./components/list/list.component";
import { DetailComponent } from "./components/detail/detail.component";

const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        children: [{
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
    ListComponent,
    DetailComponent,
];
