import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TabsModule } from "ngx-tabs";
import {
    NgbDatepickerModule,
    NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { PagesRoutingModule } from '../pages/pages-routing.module';

import {
    HeaderComponent,
    FooterComponent,
    PagingComponent,
    CardComponent,
    ModalBasicComponent
} from './components';

import {
    DiscographyComponent,
    LiveComponent,
    NewsComponent,
    ProfileComponent,
    ScheduleComponent
} from '../pages';


import {
    RequestManager,
    CamelcaseConverter,
    DateManager
} from './services';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
    NgbModule,
];

const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    PagingComponent,
    CardComponent,
    ModalBasicComponent
];

const PAGE_COMPONENTS = [
    DiscographyComponent,
    LiveComponent,
    NewsComponent,
    ProfileComponent,
    ScheduleComponent
];

const SERVICES = [
    RequestManager,
    CamelcaseConverter,
    DateManager
];

const PIPES = [
];

const NB_THEME_PROVIDERS = [
];

@NgModule({
    imports: [...BASE_MODULES, ...NB_MODULES, HttpClientModule, NgxPaginationModule, TabsModule,
        CalendarModule.forRoot(),
        NgbDatepickerModule.forRoot(),
        NgbTimepickerModule.forRoot(), PagesRoutingModule],
    exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PAGE_COMPONENTS, ...PIPES],
    declarations: [...COMPONENTS, ...PIPES, ...PAGE_COMPONENTS],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ThemeModule,
            providers: [
                ...NB_THEME_PROVIDERS,
                SERVICES,
            ],
        };
    }
}
