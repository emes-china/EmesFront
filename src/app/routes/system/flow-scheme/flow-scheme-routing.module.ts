import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemeListComponent } from './scheme-list/scheme-list.component';

const routes: Routes = [
  {
    path: '',
    component: SchemeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowSchemeRoutingModule {}
