import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DiscographyRoutingModule, routedComponents } from './discography-routing.module';
import { ListDataService } from './components/list/list.service';
import { DetailDataService } from './components/detail/detail.service';
import { TabsModule } from "ngx-tabs";

@NgModule({
    imports: [
        ThemeModule,
        DiscographyRoutingModule,
        TabsModule,
    ],
    declarations: [
        routedComponents,
    ],
    providers: [
        ListDataService,
        DetailDataService,
    ],
})
export class DiscographyModule {
}
