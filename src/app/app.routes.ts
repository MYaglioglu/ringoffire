import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    { path: '', component: StartScreenComponent},
    { path: 'game', component: GameComponent},
];
