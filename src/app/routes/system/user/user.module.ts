import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserRoleComponent } from './user-role/user-role.component';

@NgModule({
  declarations: [UserListComponent, UserEditComponent, UserRoleComponent],
  imports: [SharedModule, UserRoutingModule],
  entryComponents: [UserEditComponent, UserRoleComponent],
})
export class UserModule {}
