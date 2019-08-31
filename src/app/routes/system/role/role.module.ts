import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RoleDrawerComponent } from './role-drawer/role-drawer.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleRoutingModule } from './role-routing.module';

@NgModule({
  declarations: [RoleListComponent, RoleEditComponent, RoleDrawerComponent],
  imports: [SharedModule, RoleRoutingModule],
  entryComponents: [RoleEditComponent, RoleDrawerComponent],
})
export class RoleModule {}
