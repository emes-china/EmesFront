import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowSchemeRoutingModule } from './flow-scheme-routing.module';
import { SchemeListComponent } from './scheme-list/scheme-list.component';


@NgModule({
  declarations: [SchemeListComponent],
  imports: [
    CommonModule,
    FlowSchemeRoutingModule
  ]
})
export class FlowSchemeModule { }
