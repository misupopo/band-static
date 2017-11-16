import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        ThemeModule.forRoot(),
        CoreModule.forRoot(),
        NgxPaginationModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
    ],
})
export class AppModule {
}
