import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { NewsRoutingModule, routedComponents } from './news-routing.module';
import { ListDataService } from './components/list/list.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { TabsModule } from "ngx-tabs";

@NgModule({
    imports: [
        ThemeModule,
        NewsRoutingModule,
        NgxPaginationModule,
        TabsModule,
    ],
    declarations: [
        routedComponents,
    ],
    providers: [
        ListDataService,
    ],
})
export class NewsModule {
}
