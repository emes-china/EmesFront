import { NgModule } from '@angular/core';

import { RoleRoutingModule } from './role-routing.module';
import { RoleListComponent } from './role-list/role-list.component';
import { SharedModule } from '@shared';
import { RoleEditComponent } from './role-edit/role-edit.component';

@NgModule({
  declarations: [RoleListComponent, RoleEditComponent],
  imports: [SharedModule, RoleRoutingModule],
  entryComponents: [RoleEditComponent],
})
export class RoleModule {}
