import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FlowFormRoutingModule } from './flow-form-routing.module';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormListComponent } from './form-list/form-list.component';

@NgModule({
  declarations: [FormListComponent, FormEditComponent],
  imports: [SharedModule, FlowFormRoutingModule],
  entryComponents: [FormEditComponent],
})
export class FlowFormModule {}
