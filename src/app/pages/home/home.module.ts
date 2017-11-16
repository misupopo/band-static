import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents } from './home-routing.module';
import { HomeDataService } from './home.service';

@NgModule({
    imports: [
        ThemeModule,
        HttpClientModule
    ],
    declarations: [
        ...routedComponents
    ],
    providers: [
        HomeDataService
    ],
})
export class HomeModule {
}
