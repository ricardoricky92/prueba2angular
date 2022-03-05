import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/anime',
    pathMatch: 'full'
  },
  {
    path: 'anime',
    component: AnimeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
