import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '@shared';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [UserListComponent, UserCreateComponent],
  imports: [SharedModule, UserRoutingModule],
  entryComponents: [UserCreateComponent],
})
export class UserModule {}
