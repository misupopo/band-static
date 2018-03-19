import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [{
            path: '',
            component: IndexComponent,
        }, {
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
    HomeComponent,
    IndexComponent
];
