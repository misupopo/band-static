import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataModule } from './data/data.module';
import { ShareModule } from './share/share.module';

const NB_CORE_PROVIDERS = [
    ...DataModule.forRoot().providers,
    ...ShareModule.forRoot().providers
];

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
    ],
    declarations: [],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: CoreModule,
            providers: [
                ...NB_CORE_PROVIDERS,
            ],
        };
    }
}
