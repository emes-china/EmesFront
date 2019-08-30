import { NgModule } from '@angular/core';

import { RoleRoutingModule } from './role-routing.module';
import { RoleListComponent } from './role-list/role-list.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [RoleListComponent],
  imports: [SharedModule, RoleRoutingModule],
})
export class RoleModule {}
