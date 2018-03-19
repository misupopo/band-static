import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from "./news.component";
import { ListComponent } from "./components/list/list.component";

const routes: Routes = [
    {
        path: '',
        component: NewsComponent,
        children: [{
            path: '',
            component: ListComponent,
        }, {
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
    NewsComponent,
    ListComponent,
];
