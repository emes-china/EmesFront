import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FlowSchemeRoutingModule } from './flow-scheme-routing.module';
import { SchemeListComponent } from './scheme-list/scheme-list.component';
import { SchemeEditComponent } from './scheme-edit/scheme-edit.component';

@NgModule({
  declarations: [SchemeListComponent, SchemeEditComponent],
  imports: [SharedModule, FlowSchemeRoutingModule],
  entryComponents: [SchemeEditComponent],
})
export class FlowSchemeModule {}
