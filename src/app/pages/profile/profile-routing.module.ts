import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [{
            path: '',
            component: ProfileComponent
        }, {
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
