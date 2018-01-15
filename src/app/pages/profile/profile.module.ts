import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileRoutingModule, routedComponents } from './profile-routing.module';
import { DetailDataService } from './components/detail/detail.service';

@NgModule({
    imports: [
        ThemeModule,
        ProfileRoutingModule,
    ],
    declarations: [
        routedComponents,
    ],
    providers: [
        DetailDataService,
    ],
})
export class ProfileModule {
}
