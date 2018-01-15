import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TabsModule } from "ngx-tabs";

import {
    HeaderComponent,
    FooterComponent,
    PagingComponent,
    CardComponent,
    ModalBasicComponent
} from './components';

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
    imports: [...BASE_MODULES, ...NB_MODULES, HttpClientModule, NgxPaginationModule, TabsModule],
    exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
    declarations: [...COMPONENTS, ...PIPES],
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
