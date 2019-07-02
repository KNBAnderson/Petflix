import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { CaroselComponent } from './carosel/carosel.component';



const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'browse',
    component: CaroselComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


