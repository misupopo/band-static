import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { IndexDataService } from './components/index/index.service';

@NgModule({
    imports: [
        ThemeModule,
        HttpClientModule,
        HomeRoutingModule
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
