import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ScheduleRoutingModule, routedComponents } from './schedule-routing.module';
import { DetailDataService } from './components/detail/detail.service';
import { CalendarModule } from 'angular-calendar';

@NgModule({
    imports: [
        ThemeModule,
        ScheduleRoutingModule,
        CalendarModule.forRoot(),
    ],
    declarations: [
        routedComponents,
    ],
    providers: [
        DetailDataService,
    ],
})
export class ScheduleModule {
}
