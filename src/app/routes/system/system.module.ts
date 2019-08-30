import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { ApiModule } from './api/api.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [],
  imports: [SharedModule, SystemRoutingModule, ApiModule],
})
export class SystemModule {}
