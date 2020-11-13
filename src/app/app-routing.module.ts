import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuantaRemerasComponent } from './guanta-remeras/guanta-remeras.component';
import { GuantaAboutComponent } from './guanta-about/guanta-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Remeras',
    pathMatch:'full',
  },
  {
    path: 'Remeras',
    component:GuantaRemerasComponent
  },
  {
    path:'about',
    component:GuantaAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
