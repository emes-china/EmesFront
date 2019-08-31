import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowFormRoutingModule } from './flow-form-routing.module';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';


@NgModule({
  declarations: [FormListComponent, FormEditComponent],
  imports: [
    CommonModule,
    FlowFormRoutingModule
  ]
})
export class FlowFormModule { }
