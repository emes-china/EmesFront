import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleListComponent } from './module-list/module-list.component';
import { SharedModule } from '@shared';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import { ModuleElementEditComponent } from './module-element-edit/module-element-edit.component';

@NgModule({
  declarations: [ModuleListComponent, ModuleEditComponent, ModuleElementEditComponent],
  imports: [SharedModule, ModuleRoutingModule],
  entryComponents: [ModuleEditComponent, ModuleElementEditComponent],
})
export class ModuleModule {}
