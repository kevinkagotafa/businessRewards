import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedrewardPage } from './completedreward.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedrewardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedrewardPageRoutingModule {}
