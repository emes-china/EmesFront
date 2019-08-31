import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FlowSchemeRoutingModule } from './flow-scheme-routing.module';
import { SchemeListComponent } from './scheme-list/scheme-list.component';

@NgModule({
  declarations: [SchemeListComponent],
  imports: [SharedModule, FlowSchemeRoutingModule],
})
export class FlowSchemeModule {}
