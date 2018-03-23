import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { LiveRoutingModule, routedComponents } from './live-routing.module';
import { ListDataService } from './components/list/list.service';
import { DetailDataService } from './components/detail/detail.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShareModule } from '@ngx-share/core';

@NgModule({
    imports: [
        ThemeModule,
        LiveRoutingModule,
        NgxPaginationModule,
        ShareModule.forRoot(),
    ],
    declarations: [
        routedComponents,
    ],
    providers: [
        ListDataService,
        DetailDataService,
    ],
})
export class LiveModule {
}
