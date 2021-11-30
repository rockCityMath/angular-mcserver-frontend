import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ConsolePageComponent } from './components/console-page/console-page.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [ ]
  },
  {
    path: 'console',
    component: ConsolePageComponent,
    canActivate: []
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
