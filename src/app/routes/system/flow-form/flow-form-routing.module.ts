import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';

const routes: Routes = [
  {
    path: '',
    component: FormListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowFormRoutingModule {}
