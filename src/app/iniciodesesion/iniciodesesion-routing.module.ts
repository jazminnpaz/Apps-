import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciodesesionPage } from './iniciodesesion.page';

const routes: Routes = [
  {
    path: '',
    component: IniciodesesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciodesesionPageRoutingModule {}
