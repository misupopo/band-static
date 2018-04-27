import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';

const PAGES_COMPONENTS = [
    PagesComponent,
];

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
    ],
    declarations: [
        PAGES_COMPONENTS,
    ],
})
export class PagesModule {
}
