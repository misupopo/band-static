import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: 'home',
            component: HomeComponent,
        },
        {
            path: 'news',
            loadChildren: './news/news.module#NewsModule',
        },
        {
            path: 'live',
            loadChildren: './live/live.module#LiveModule',
        },
        {
            path: 'live/:pageNumber',
            loadChildren: './live/live.module#LiveModule',
        },
        {
            path: 'discography',
            loadChildren: './discography/discography.module#DiscographyModule',
        },
        {
            path: 'profile',
            loadChildren: './profile/profile.module#ProfileModule',
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
