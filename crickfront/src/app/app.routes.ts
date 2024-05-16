import { Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    {
        path : "home",
        component:HomeComponent,
        title:"Home|Crickinfo"
    },
    {
        path:"live",
        component:LiveComponent,
        title:"Live-Matches|Crickinfo"
    },
    {
        path:"history",
        component:HistoryComponent,
        title:"History|Crickinfo"

    }
];
