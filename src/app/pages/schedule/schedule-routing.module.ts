import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { DetailComponent } from './components/detail/detail.component';
import { CalenderHeadComponent } from './components/detail/components/calenderHead/calenderHead.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduleComponent,
        children: [{
            path: '',
            component: DetailComponent
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
export class ScheduleRoutingModule {}

export const routedComponents = [
    ScheduleComponent,
    DetailComponent,
    CalenderHeadComponent,
];
