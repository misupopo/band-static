import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { IndexDataService } from './components/index/index.service';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NgxCarouselModule } from 'ngx-carousel';

@NgModule({
    imports: [
        ThemeModule,
        HttpClientModule,
        HomeRoutingModule,
        NgxTwitterTimelineModule,
        NgxCarouselModule
    ],
    declarations: [
        ...routedComponents,
    ],
    providers: [
        IndexDataService
    ],
})
export class HomeModule {
}
