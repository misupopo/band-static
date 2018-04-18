import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingModule } from 'ngx-loading';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeModule.forRoot(),
        CoreModule.forRoot(),
        NgxPaginationModule,
        LoadingModule,
        NgxCarouselModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
    ],
})
export class AppModule {
}
