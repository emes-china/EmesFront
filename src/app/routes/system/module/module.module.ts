import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleListComponent } from './module-list/module-list.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [ModuleListComponent],
  imports: [SharedModule, ModuleRoutingModule],
})
export class ModuleModule {}
