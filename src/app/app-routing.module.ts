import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },// lazingModule
    { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
