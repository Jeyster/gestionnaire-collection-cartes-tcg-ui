import { Routes } from '@angular/router';
import { Cards } from './cards/cards';
import { Games } from './games/games';

export const routes: Routes = [
   { path: 'games', component: Games},
   { path: 'games/:gameName', component: Cards},
   { path: '', redirectTo: '/games', pathMatch: 'full' }
]
