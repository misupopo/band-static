import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { InfoRoutingModule, routedComponents } from './info-routing.module';
import { ListDataService } from './components/list/list.service';
import { DetailDataService } from './components/detail/detail.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShareModule } from '@ngx-share/core';

@NgModule({
    imports: [
        ThemeModule,
        InfoRoutingModule,
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
export class InfoModule {
}
