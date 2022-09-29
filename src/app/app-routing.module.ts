import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyVianditaAboutComponent } from './my-viandita-about/my-viandita-about.component';
import { MyVianditaViandasComponent } from './my-viandita-viandas/my-viandita-viandas.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'viandas',
    pathMatch:'full'
  },

  {
    path: 'viandas',
    component: MyVianditaViandasComponent
  },
  
  {
    path: 'about',
    component: MyVianditaAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
